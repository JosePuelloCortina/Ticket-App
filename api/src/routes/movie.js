/*
    Movie routes
    Path: host + /movies
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidators } = require('../middlewares/field-validators');
const { addMovie, getAllMovies, removeMovie, getMoviesByName, getMovieById } = require('../controllers/movies');
const {Pelicula} = require("../db")
const router = Router();
//Routes
//Get all the movies that are in the database
router.get('/', getAllMovies);
//Get movies matching an expression
router.get('/name/:name', getMoviesByName);
// Get movie by ID
router.get('/id/:id', getMovieById);

router.post('/',
    [//middlewares
        check('nombre', 'name is required').not().isEmpty(),
        check('duracion', 'duracion is required').not().isEmpty(),
        check('descripcion', 'descripcion is required').not().isEmpty(),
        check('trailer', 'trailer is required').not().isEmpty(),
        check('estreno', 'estreno is required').not().isEmpty(),

        fieldValidators
    ],
    addMovie
);

router.put('/', async (req, res) => {
    const {id} = req.query;
    const {
        nombre,
        fecha,
        image,
        duracion,
        descripcion,
        trailer,
        estreno,
        puntuacion
    } = req.body;
    try {
        const movie = await Pelicula.findOne({
            where: {
                id
            }
        });

        await movie.update({
            nombre: nombre ? nombre : movie.nombre,
            fecha: fecha ? fecha : movie.fecha,
            image: image ? image : movie.image,
            duracion: duracion ? duracion : movie.duracion,
            descripcion: descripcion ? descripcion : movie.descripcion,
            trailer: trailer ? trailer : movie.trailer,
            estreno: estreno ? estreno : movie.estreno,
            puntuacion: puntuacion ? puntuacion : movie.puntuacion
        });
        res.status(200).send(movie);
    } catch (error) {
        res.status(404).json('ocurrio un error: '+ error);
    }
})

router.delete('/', removeMovie);


module.exports = router;