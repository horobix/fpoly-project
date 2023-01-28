import * as bcrypt from "bcryptjs";
import { IncomingForm } from "formidable";
import * as fs from "fs";
import path from "path";

const updateUser = async (table, id, req, res, url) => {
    const form = new IncomingForm();
    form.parse(req, function (err, fields, files) {
        let data = {
            ho: fields.ho,
            ten: fields.ten,
            email: fields.email,
            password: fields.password,
        }
                          
        let currentImagePath = fields.hinhhientai;

        if (files.hinh.originalFilename) {
            data.hinh = files.hinh.originalFilename;
        }

        table
            .update(data, {
                where: {
                    id: id,
                },
            })
            .then((dataAdd) => {
                if (data.hinh) {
                    let oldPath = files.hinh.filepath;
                    let newPath = path.join(__dirname, `../../../public/img/${data.hinh}`);
                    var rawData = fs.readFileSync(oldPath);

                    //Upload new image
                    fs.writeFile(newPath, rawData, (err) => (err) ? console.log(err) : '')

                    // Delete old image
                    // let currentPath = path.join(__dirname, `../../../public/img/${currentImagePath}`)
                    // fs.unlink(currentPath, (err) => err ? console.log(err) : '');
                }
                res.redirect(url);
            })
            .catch((err) => {
                console.log(err);
            });

    });

};
export default updateUser;
