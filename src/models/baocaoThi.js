import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const baocaoThi = sequelize.define(
  "baocaoThi",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    maLich_Thi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Gv1_checkin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Gv2_checkin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isOK: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    soSV: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    soSV_Fail: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Noidung: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "baocaoThi",
  }
);
baocaoThi.sync({ alter: true });

export default baocaoThi;
