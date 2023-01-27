import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const BoMon = sequelize.define("bomons", {
  tenBoMon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tenTat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thuTu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  anHien: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
  },
  idCoSo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
BoMon.sync({ alter: true });

// export const getListBoMon = async (req, res, idBoMon) => {
//   if (idBoMon) {
//     let data = await BoMon.findAll({
//       where: {
//         id: idBoMon,
//       },
//     });

//     res.render("admin/pages/bomon/formBoMon", { detailBoMon: data });
//     // res.json(data);
//   } else {
//     let data = await BoMon.findAll();
//     res.render("admin/pages/bomon", { data: data });
//     // res.json(data);
//   }
// };

// export const addBoMon = async (data, res) => {
//   let thuTu = await BoMon.max("thuTu");
//   data["thuTu"] = thuTu + 1;
//   data["idCoSo"] = "hcm";
//   data["id"] = thuTu + 1;
//   await BoMon.create(data);
//   res.redirect("/admin/bomon");
// };

// export const upDateBoMon = async (data, res, id) => {
//   BoMon.update(data, {
//     where: {
//       id: id,
//     },
//   })
//     .then((dataAdd) => {
//       res.redirect("/admin/bomon");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const deleteBoMon = (res, id) => {
//   BoMon.destroy({
//     where: {
//       id: id,
//     },
//   })
//     .then((dataAdd) => {
//       console.log("Xóa thành công");
//       res.redirect("/admin/bomon");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export default BoMon;
