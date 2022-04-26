const { Router } = require("express");
const routerCatg = Router();
const { Categoria } = require("../db")
const {
  crearCategoria,
  allCategories,
} = require("../controllers/Categorias.js");

routerCatg.post("/", crearCategoria);

routerCatg.get("/", allCategories);

routerCatg.delete("/", async (req, res) => {
  const {id} = req.query;
  try {
    const categorie = await Categoria.findByPk(id);
    if(!categorie) throw Error("Id incorrecto o categoría inexistente");
    await categorie.destroy();
    res.status(200).send("Categoría eliminada exitosamente!")
  } catch (error) {
    res.status(404).json('ocurrio un error: '+ error);
  }
});

module.exports = routerCatg;
