const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('pelicula', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
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
    }, { timestamps: false })
}