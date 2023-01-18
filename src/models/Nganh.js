import { DataTypes } from "sequelize";
import sequelize from "./connect";

const Nganh = sequelize.define("nganh", {
    tenNganh: {
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
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    idBM: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Nganh.sync({ alter: true });

export default Nganh;
