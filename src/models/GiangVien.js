import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const GiangVien = sequelize.define("giangviens", {
  hoGV: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tenGV: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emailGV: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idBM: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isCoHuu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cacMonDay: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hinhGV: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  khongPhanGV2: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ghiChu: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
GiangVien.sync({ alter: true });


export default GiangVien;
