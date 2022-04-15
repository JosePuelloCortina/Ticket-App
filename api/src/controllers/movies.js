const { response } = require('express');
const { Pelicula, Categoria, Op } = require('../db');

const getAllMovies = async (req, res = response) => {
    try {
        const movies = await Pelicula.findAll({
            include: Categoria
        });
        res.json({ success: true, data: movies });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Talk to admin'
        });
    }
};

const getMovieById = async (req, res = response) => {
    const { id } = req.params;
    try {
        const movie = await Pelicula.findByPk(id);
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: 'movie does not exist with that id'
            });
        }
        res.json({
            success: true,
            data: movie
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Talk to admin'
        });
    }
};

const getMoviesByName = async (req, res = response) => {
    const { name } = req.params;
    try {
        const movies = await Pelicula.findAll({
            where: {
                nombre: { [Op.iLike]: `%${name}%` }
            },
            include: Categoria
        })
        res.json({
            succes: true,
            data: movies
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Talk to admin'
        });
    }
};

const addMovie = async (req, res = response) => {
    const movie = req.body;

    try {
        const savedMovie = await Pelicula.create(movie);
        // await movie.addCategoria(categoria);
        res.json({
            success: true,
            data: savedMovie
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Talk to the admin'
        });
    }
};

const updateMovie = async (req, res = response) => {
    const { id } = req.params;
    try {
        const movie = await Pelicula.findByPk(id);
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: 'movie does not exist with that id'
            });
        }
        const newMovie = {
            ...req.body
        }
        const updateMovie = await movie.update(newMovie)
        res.json({
            success: true,
            data: updateMovie
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Talk to the admin'
        });
    }
};
const removeMovie = async (req, res = response) => {
    const { id } = req.params;
    try {
        const movie = await Pelicula.findByPk(id);
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: 'movie does not exist with that id'
            });
        }
        const deletedMovie = await movie.destroy();
        res.json({
            success: true,
            message: 'Movie deleted succeful'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Talk to the admin'
        });
    }
};

module.exports = {
    addMovie,
    getAllMovies,
    getMoviesByName,
    getMovieById,
    updateMovie,
    removeMovie
};