import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const User = sequelize.define("users", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ho: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ten: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  block: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
User.sync({ alter: true });

export default User;
