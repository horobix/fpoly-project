import uploadDataUsers from "../query-uploadFile/uploadDataUser";
import { IncomingForm } from "formidable";

const addUser = async (table, req, res, url, id) => {
    const form = new IncomingForm();
    form.parse(req, function (err, fields, files) {

        if (id) {
            table
                .findOne({
                    where: {
                        id: id,
                    },
                })
                .then(async (user) => {
                    if (user) {
                        let data = uploadDataUsers(fields, files);

                        await table.update(data, {
                            where: {
                                id: id,
                            },
                        })
                        res.redirect(url);

                    }

                })
                .catch((err) => {
                    res.send("error: " + err);
                });
        } else {
            table
                .findOne({
                    where: {
                        email: fields.email,
                    },
                })
                .then(async (user) => {
                    if (!user) {
                        let data = uploadDataUsers(fields, files);
                        await table.create(data);
                        res.redirect(url);
                    } else {
                        alert('Email này đã được đăng ký');
                        window.history.go(-1);
                    }
                })
                .catch((err) => {
                    res.send("error: " + err);
                });
        }



    });

};
export default addUser;
