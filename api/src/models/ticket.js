const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('ticket', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_hora: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        descuento: {
            type: DataTypes.FLOAT
        },
        numero_sala: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
}