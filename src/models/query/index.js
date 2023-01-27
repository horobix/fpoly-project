// QUERY SELECT ALL
// import * as bcrypt from 'bcrypt';
import * as bcrypt from "bcryptjs";

export const getList = (table, res, url) => {
    table
        .findAll()
        .then((data) => {
            res.render(url, { listData: data });
        })
        .catch((err) => {
            console.log(err);
        });
};

// QUERY DETAIL DATA
export const getOne = (table, id, res, url) => {
    table
        .findAll({
            where: {
                id: id,
            },
        })
        .then((data) => {
            res.render(url, { data: data });
        })
        .catch((err) => {
            console.log(err);
        });
};

// QUERY INSERT DATA
export const addIntoTable = async (table, data, res, url) => {
    switch (true) {
        case Boolean(data.tenCaThi):
            let thuTuCaThi = await table.max("thuTu");
            data["thuTu"] = thuTuCaThi + 1;
            await table.create(data);
            res.redirect(url);
            break;
        case Boolean(data.tenBoMon):
            let thuTuBoMon = await table.max("thuTu");
            data["thuTu"] = thuTuBoMon + 1;
            data["idCoSo"] = "hcm";
            data["id"] = thuTuBoMon + 1;
            await table.create(data);
            res.redirect(url);
            break;

        case Boolean(data.tenRule):
            let thuTuRule = await table.max("thuTu");
            data["thuTu"] = thuTuRule + 1;
            await table.create(data);
            res.redirect(url);
            break;

        case Boolean(data.email):
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
            break;
        // Code more in here
        case Boolean(data.khongPhanGV2):
                let idGV = await table.max("id");
                data["id"] = idGV + 1;
                await table.create(data);
                res.redirect(url);
            break;
        // Case monhoc:
        // break

        default:
            res.redirect(url);
            break;
    }
};

// QUERY UPDATE
export const updateInTable = (table, data, id, res, url) => {
    table
        .update(data, {
            where: {
                id: id,
            },
        })
        .then((dataAdd) => {
            res.redirect(url);
        })
        .catch((err) => {
            console.log(err);
        });
};

// QUERY DELETE
export const deleteInTable = (table, res, id, url) => {
    table
        .destroy({
            where: {
                id: id,
            },
        })
        .then(() => {
            console.log("Xóa thành công");
            res.redirect(url);
        })
        .catch((err) => {
            console.log(err);
        });
};
