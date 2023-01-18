import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const Phong = sequelize.define("phongs", {
  tenPhong: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thuTu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idToaNha: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tienNghi: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  idLoaiPhong: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  trangThai: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  ghiChu: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
Phong.sync({ alter: true });

export default Phong;
