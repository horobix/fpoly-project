import * as bcrypt from "bcryptjs";

const addUser = async (table, data, res, url) => {
    let id = await table.max("id");
    data["id"] = id + 1;

    table
        .findOne({
            where: {
                email: data.email,
            },
        })
        .then((user) => {
            if (!user) {
                data.password = bcrypt.hashSync(data.password, 10);
                table
                    .create(data)
                    .then(() => {
                        res.redirect(url);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                res.json({ error: "Email này đã được đăng ký" });
            }
        })
        .catch((err) => {
            res.send("error: " + err);
        });
};
export default addUser;
