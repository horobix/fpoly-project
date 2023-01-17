import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

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

export default MonHoc;
