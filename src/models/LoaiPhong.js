import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const LoaiPhong = sequelize.define("loaiphongs", {
  tenLoaiPhong: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thuTu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ghiChu: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
LoaiPhong.sync({ alter: true });

export default LoaiPhong;
