import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const ToaNha = sequelize.define("toanhas", {
  tenToaNha: {
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
    defaultValue: true,
  },
  idKhuVuc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ghiChu: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
ToaNha.sync({ alter: true });

export default ToaNha;
