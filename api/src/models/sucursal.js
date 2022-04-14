const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sucursal', {
        id: {
            type: DataTypes.UUID,
            default: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contacto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}