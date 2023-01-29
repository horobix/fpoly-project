import uploadDataUsers from "../query-uploadFile/uploadDataUser";
import { IncomingForm } from "formidable";

const addUser = async (table, req, res, url, id) => {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {

        if (id) {
            let data = uploadDataUsers(fields, files);

            await table.update(data, {
                where: {
                    id: id,
                },
            })
            res.redirect(url);
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
                        data.id = await table.max('id')+1;
                        await table.create(data);
                        res.redirect(url);
                    } else {
                        res.send('<h1>Email này đã được đăng ký, vui lòng sử dụng email khác!</h1>');
                    }
                })
                .catch((err) => {
                    res.send("error: " + err);
                });
        }



    });

};
export default addUser;
