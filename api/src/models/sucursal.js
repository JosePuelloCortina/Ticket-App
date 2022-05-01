const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sucursal', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        provincia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}