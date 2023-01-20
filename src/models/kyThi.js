import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const kyThi = sequelize.define(
  "kyThi",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    maHocKy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    block: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maKyThi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idCoSo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tenKyThi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ngayBD: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ngayKT: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    khoaDangKyLuc: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    khongPhanGV2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ghiChu: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "kyThi",
  }
);
kyThi.sync({ alter: true });

export default kyThi;
