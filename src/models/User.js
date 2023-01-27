import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";
// import * as bcrypt from 'bcrypt';

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
},
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ho: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ten: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hinh: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  block: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
User.sync({ alter: true });

// export const getListUser = (req, res, idUser) => {
//   if (idUser) {
//     User.findAll({
//       where: {
//         id: idUser,
//       },
//     })
//       .then((data) => {
//         res.render("admin/pages/users/formuser", { detailUser: data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     User.findAll()
//       .then((data) => {
//         res.render("admin/pages/users", { listUser: data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// };

// export const addUser = async (data, res) => {
//   let id = await User.max("id");
//   data["id"] = id + 1;
  
//   User.findOne( {
//     where: {
//       email: data.email
//     }
//   }).then(user => {
//     if(!user) {
//        data.password = bcrypt.hashSync(data.password, 10);
//        User.create(data)
//        .then((data) => {
//            res.redirect("/admin/users");
//        })
//        .catch((err) => {
//            console.log(err);
//        });
//     } else {
//       res.json({error: "Email này đã được đăng ký"});
//     }
//   }).catch(err => {
//     res.send('error: ' + err)
// })
// };

// export const updateUser = (data, res, id) => {
//   data.password = bcrypt.hashSync(data.password, 10);
//   User.update(data, {
//       where: {
//           id: id,
//       },
//   })
//       .then((data) => {
//           res.redirect("/admin/users");
//       })
//       .catch((err) => {
//           console.log(err);
//       });
// };

// export const deleteUser = (res, id) => {
//   User.destroy({
//       where: {
//           id: id,
//       },
//   })
//       .then(() => {
//           console.log("Xóa thành công");
//           res.redirect("/admin/users");
//       })
//       .catch((err) => {
//           console.log(err);
//       });
// };


export default User;
