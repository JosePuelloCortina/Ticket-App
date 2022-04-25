const { Categoria } = require("../db.js");
const { v4 } = require("uuid");

const addCategorias = async (nombre) => {
  try {
    const result = await Categoria.create({
      id: v4(),
      nombre,
    });
    return result;
  } catch (error) {
    console.log("Error al guardar categoria ", error);
  }
};

module.exports = { addCategorias };
