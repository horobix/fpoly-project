import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const KhuVuc = sequelize.define("khuvucs", {
  idKhuVuc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tenKhuVuc: {
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
  idCoSo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ghiChu: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
KhuVuc.sync({ alter: true });

export default KhuVuc;
