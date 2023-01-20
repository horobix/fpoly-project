import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const GiangVien = sequelize.define("giangviens", {
  ho: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ten: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idBM: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isCoHuu: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  cacMonDay: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hinh: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  khongPhanGV2: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  ghiChu: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
GiangVien.sync({ alter: true });

export default GiangVien;
