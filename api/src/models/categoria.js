const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('categoria', {
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
       
    })
}