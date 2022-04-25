const { Router } = require("express");
const routerCatg = Router();
const {
  crearCategoria,
  allCategories,
} = require("../controllers/Categorias.js");

routerCatg.post("/", crearCategoria);

routerCatg.get("/", allCategories);

module.exports = routerCatg;
