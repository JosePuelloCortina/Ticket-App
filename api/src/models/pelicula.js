const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('pelicula', {
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
        feche: {
            type: DataTypes.DATE,
            allowNull: false
        },
        duracion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trailer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estreno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        puntuacion: {
            type: DataTypes.STRING,
            allowNull: false
        }     
    })
}