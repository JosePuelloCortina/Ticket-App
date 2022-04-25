const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Categoria", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   sequelize.define(
//     "categoria",
//     {
//       id: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV1,
//         primaryKey: true,
//         allowNull: false,
//       },
//       nombre: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       timestamps: false,
//     }
//   );
// };
