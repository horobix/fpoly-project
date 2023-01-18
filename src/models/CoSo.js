import { DataTypes } from "sequelize";
import sequelize from "./connect";

const CoSo = sequelize.define("cosos", {
    maCoSo: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    tenCoSO: {
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
        defaultValue: 1,
    },
    ghiChu: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

CoSo.sync({ alter: true });

export default CoSo;
