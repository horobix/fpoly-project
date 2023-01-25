import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const CaThi = sequelize.define("cathis", {
    tenCaThi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thuTu: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    thoiDiem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ghiChu: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});
CaThi.sync({ alter: true });

export const getListCaThi = (req, res, idCaThi) => {
    
    if (idCaThi) {
        CaThi.findAll({
            where: {
                id: idCaThi,
            },
        })
            .then((data) => {
                
                res.render("admin/pages/cathi/formCaThi", { detailCaThi: data });
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        CaThi.findAll()
            .then((data) => {
                res.render("admin/pages/cathi", { listCaThi: data });
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export const addCaThi = async (data, res) => {
    let thuTu = await CaThi.max("thuTu");
    data["thuTu"] = thuTu + 1;
    CaThi.create(data)
        .then((dataAdd) => {
            
            res.redirect("/admin/cathi");
        })
        .catch((err) => {
            console.log(err);
        });
};

export const upDateCaThi = (data, res, id) => {
    CaThi.update(data, {
        where: {
            id: id,
        },
    })
        .then((dataAdd) => {
            
            res.redirect("/admin/cathi");
        })
        .catch((err) => {
            console.log(err);
        });
};

export const deleteCaThi = ( res, id) => {
    
    CaThi.destroy({
        where: {
            id: id,
        },
    })
        .then((dataAdd) => {
            console.log("Xóa thành công");
            res.redirect("/admin/cathi");
        })
        .catch((err) => {
            console.log(err);
        });
};

export default CaThi;
