import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const CacCaRanh = sequelize.define("cacCaRanhs", {
    idCaRanh: { type: DataTypes.INTEGER, allowNull: false },
    maKyThi: { type: DataTypes.STRING, allowNull: false},
    idKhuVuc: { type: DataTypes.STRING, allowNull: false},
    giangVien: { type: DataTypes.STRING, allowNull: false},
    ngay: { type: DataTypes.DATE, allowNull: false},
    cacCaGV2_DeNghi: {type: DataTypes.STRING,allowNull: false},
    cacCaGV2_Confirm: {type: DataTypes.STRING,allowNull: false},
    guiMailLuc: {type: DataTypes.DATE,allowNull: false},
    confirmLuc: {type: DataTypes.DATE,allowNull: false}
});
CacCaRanh.sync({ alter: true });

export default CacCaRanh;
