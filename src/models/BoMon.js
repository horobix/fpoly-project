import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const BoMon = sequelize.define("bomons", {
  tenBoMon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tenTat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thuTu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  anHien: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  idCoSo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
});
BoMon.sync({ alter: true });

export default BoMon;
