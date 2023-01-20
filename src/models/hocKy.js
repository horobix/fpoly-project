import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const hocKy = sequelize.define(
  "hocKys",
  {
    maHocKy: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tenHocKy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thuTu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anHien: {
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
    ghiChu: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "hocKy",
  }
);
hocKy.sync({ alter: true });

export default hocKy;
