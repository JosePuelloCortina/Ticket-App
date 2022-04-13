const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('ticket', {
        id: {
            type: DataTypes.UUID,
            default: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false
        },
        feche_hora: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        descuento: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        numero_sala: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
}