import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const CauHinh = sequelize.define("cauhinhs", {
  tenThamSo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  giaTri: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  thuTu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});
CauHinh.sync({ alter: true });

export default CauHinh;
