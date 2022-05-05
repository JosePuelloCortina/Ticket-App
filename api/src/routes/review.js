const { Router } = require("express");
const { User, Review } = require("../db");
const { reviewByCategory } = require("../controllers/Review/reviewByCategory");
const { reviewEditByUser } = require("../controllers/Review/reviewEditByUser");
const {
  reviewCreateByUser,
} = require("../controllers/Review/reviewCreateByUser");

const router = Router();

// ------------------ esta ruta es para CREAR REVIEW

router.post("/movies/:idMovies/user/:idUser", reviewCreateByUser);

// -------------------- Ruta PUT para modificar las review del usuario ya que solo hay uno por usuario

router.put("/movies/:idMovies/user/:idUser", reviewEditByUser);

// ------------------ Ruta get para tarer todas las review del usurio

router.get("/movies/:idMovies", reviewByCategory);

router.get("/", async (req, res) => {
  //const {}=req.body;
  try {
    const reviews = await Review.findAll({
      // include:[{model: Review,}],
    });
    res.json(reviews);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
