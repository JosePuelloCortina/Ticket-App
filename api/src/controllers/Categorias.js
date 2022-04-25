const { Categoria } = require("../db.js");
const { addCategorias } = require("../services/Categoria.js");

const crearCategoria = async (req, res) => {
  const { nombre } = req.body;
  if (nombre) {
    const resul = await addCategorias(nombre);
    return res.status(201).json(resul);
  } else
    return res.status(500).json({
      success: false,
      message: "la categoria no puede ser nula ",
    });
};

const allCategories = async (req, res) => {
  try {
    const allCateg = await Categoria.findAll();
    res.json({ success: true, data: allCateg });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Talk to admin",
    });
  }
};

module.exports = { crearCategoria, allCategories };
