import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const Rule = sequelize.define("rules", {
  tenRule: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ghiChu: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  enable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
  thuTu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
Rule.sync({ alter: true });

export const getListRule = (req, res, idRule) => {
  if (idRule) {
    Rule.findAll({
      where: {
        id: idRule,
      },
    })
      .then((data) => {
        res.render("admin/pages/rules/formRule", { detailRule: data });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    Rule.findAll()
      .then((data) => {
        res.render("admin/pages/rules", { listRule: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const addRule = async (data, res) => {
  let thuTu = await Rule.max("thuTu");
  data["thuTu"] = thuTu + 1;
  Rule.create(data)
    .then((dataAdd) => {
      res.redirect("/admin/rules");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateRule = (data, res, id) => {
  Rule.update(data, {
    where: {
      id: id,
    },
  })
    .then((dataAdd) => {
      res.redirect("/admin/rules");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteRule = (res, id) => {
  Rule.destroy({
    where: {
      id: id,
    },
  })
    .then((dataAdd) => {
      console.log("Xóa thành công");
      res.redirect("/admin/rules");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Rule;
