import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";
import truncateString from "./helpers/truncateString";

const MonHoc = sequelize.define("monhocs", {
  maMH: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tenMH: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maMH: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tenMH: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trangThai: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  anHien: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  ghiChu: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
MonHoc.sync({ alter: true });

// GET ALL
export let getList = (req, res, url) => {
  MonHoc.findAll({
    attributes: ["id", "maMH", "tenMH", "trangThai", "anHien", "ghiChu"],
    order: [["id", "DESC"]],
  })
    .then((data) => {
      res.render(url, { listData: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export let _checkExists = async (maMH) => {
  let _find = await MonHoc.findOne({
    where: {
      maMH: maMH,
    },
  });

  return _find ? true : false;
};

// ADD
export let _addOne = async (req, res, data) => {
  let { id, ..._data } = data;
  await MonHoc.create(_data);

  res.redirect("../");
};

// DELETE
export let _deleteOne = async (req, res, id) => {
  await MonHoc.destroy({
    where: {
      id: id,
    },
  });

  res.redirect("../");
};

// EDIT
export let _editOne = async (req, res, data) => {
  let { id, maMHOld, ..._data } = data;

  await MonHoc.update(_data, {
    where: {
      id: id,
    },
  });

  res.redirect("../");
};

export default MonHoc;
