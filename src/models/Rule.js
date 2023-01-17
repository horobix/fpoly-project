import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const Rule = sequelize.define("rules", {
  tenRule: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ghiChu: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  enable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
  thuTu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
Rule.sync({ alter: true });

export default Rule;
