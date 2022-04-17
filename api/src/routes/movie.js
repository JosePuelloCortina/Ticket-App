/*
    Movie routes
    Path: host + /movies
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidators } = require('../middlewares/field-validators');
const { addMovie, getAllMovies, updateMovie, removeMovie, getMoviesByName, getMovieById } = require('../controllers/movies');
const { isDate } = require('../utils/isDate');
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
        check('fecha', 'fecha is required').custom(isDate),
        check('duracion', 'duracion is required').not().isEmpty(),
        check('descripcion', 'descripcion is required').not().isEmpty(),
        check('trailer', 'trailer is required').not().isEmpty(),
        check('estreno', 'estreno is required').not().isEmpty(),
        check('puntuacion', 'puntuacion is required').not().isEmpty(),
        fieldValidators
    ],
    addMovie
);

router.put('/:id',
    [//middlewares
        check('nombre', 'name is required').not().isEmpty(),
        check('fecha', 'fecha is required').custom(isDate),
        check('duracion', 'duracion is required').not().isEmpty(),
        check('descripcion', 'descripcion is required').not().isEmpty(),
        check('trailer', 'trailer is required').not().isEmpty(),
        check('estreno', 'estreno is required').not().isEmpty(),
        check('puntuacion', 'puntuacion is required').not().isEmpty(),
        fieldValidators
    ],
    updateMovie);

router.delete('/:id', removeMovie);


module.exports = router;