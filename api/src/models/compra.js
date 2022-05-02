const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('compra', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false
        },
        comprador_email: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cantidad_tickets: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    })
}