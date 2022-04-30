const { response } = require("express");
const { Pelicula, Categoria, Ticket, Op } = require("../db");
const { v4 } = require("uuid");

const getAllMovies = async (req, res = response) => {
  try {
    const movies = await Pelicula.findAll({
      include: [
        {
          model: Categoria,
        },
        {
          model: Ticket
        }
      ],
    });
    res.json({ success: true, data: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Talk to admin",
    });
  }
};

const getMovieById = async (req, res = response) => {
  const { id } = req.params;
  try {
    const movie = await Pelicula.findByPk(id, {
      include: [
        {
          model: Categoria,
        },
        {
          model: Ticket
        }
      ],
    });
    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "movie does not exist with that id",
      });
    }
    res.json({
      success: true,
      data: movie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Talk to admin",
    });
  }
};

const getMoviesByName = async (req, res = response) => {
  const { name } = req.params;
  try {
    const movies = await Pelicula.findAll({
      where: {
        nombre: { [Op.iLike]: `%${name}%` },
      },
      include: [
        {
          model: Categoria
        },
        {
          model: Ticket
        }
      ]
    });
    res.json({
      succes: true,
      data: movies,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Talk to admin",
    });
  }
};

const addMovie = async (req, res = response) => {
  const {
    nombre,
    fecha,
    image,
    duracion,
    descripcion,
    trailer,
    estreno,
    puntuacion,
    categorias
  } = req.body;
  try {
    const savedMovie = await Pelicula.create({
      id: v4(),
      nombre,
      fecha,
      image,
      duracion,
      descripcion,
      trailer,
      estreno,
      puntuacion,
    });

    categorias.forEach(async (categoria) => {
      let catMovie = await Categoria.findOne({
        where: {
          nombre: categoria
        }
      })
      await savedMovie.addCategoria(catMovie);
    })
    // await movie.addCategoria(categoria);
    //await savedMovie.setCategorias(generos);
    res.status(201).json({
      success: true,
      data: savedMovie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Talk to the admin",
    });
  }
};

const removeMovie = async (req, res = response) => {
  const { id } = req.query;
  try {
    const movie = await Pelicula.findByPk(id);
    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "movie does not exist with that id",
      });
    }
    const deletedMovie = await movie.destroy();
    res.json({
      success: true,
      message: "Movie deleted succeful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Talk to the admin",
    });
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  getMoviesByName,
  getMovieById,
  removeMovie,
};
