import * as bcrypt from "bcryptjs";
import { IncomingForm } from "formidable";
import * as fs from "fs";
import path from "path";

const addUser = async (table, req, res, url) => {
    let id = await table.max("id");

    const form = new IncomingForm();
    form.parse(req, function (err, fields, files) {
        let data = {
            id: id + 1,
            ho: fields.ho,
            ten: fields.ten,
            email: fields.email,
            password: fields.password,
            hinh: files.hinh.originalFilename
        }
        let oldPath = files.hinh.filepath;
        let newPath = path.join(__dirname, `../../../public/img/${data.hinh}`);
        var rawData = fs.readFileSync(oldPath);

        table
            .findOne({
                where: {
                    email: data.email,
                },
            })
            .then((user) => {
                if (!user) {
                    data.password = bcrypt.hashSync(data.password, 10);
                    console.log(newPath);
                    console.log(data);
                    table
                        .create(data)
                        .then(() => {
                            fs.writeFile(newPath, rawData, (err) => (err) ? console.log(err) : '')
                            res.redirect(url);
                        })
                        .catch((err) => {
                            console.log(err);
                        });

                } else {
                    alert('Email này đã được đăng ký');
                    window.history.go(-1);
                }
            })
            .catch((err) => {
                res.send("error: " + err);
            });

    });

};
export default addUser;
