import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const CaThi = sequelize.define("cathis", {
    tenCaThi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thuTu: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    thoiDiem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ghiChu: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});
CaThi.sync({ alter: true });



export default CaThi;
