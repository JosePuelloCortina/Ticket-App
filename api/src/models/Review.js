const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {

   sequelize.define('review',{
   commentary: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

   calification: {
    type: DataTypes.INTEGER,  //ENUM( "1", "2", "3", "4", "5", ),
    allowNull: true,
   },

  });
};