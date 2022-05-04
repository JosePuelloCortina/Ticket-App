const { conn } = require("../../db");
const { User, Review, Pelicula } = conn.models;
const { v4: uuidv4 } = require('uuid');

const reviewCreateByUser = async (req, res) => {  
    //try {
      const { idMovies, idUser } = req.params;
    const { commentary, calification } = req.body;
   try {
    const response = await Review.create({
      calification, 
      commentary,
      peliculaId: idMovies,
      userId: idUser
    },
    {
        where: {
            peliculaId: idMovies , 
            userId: idUser
        }
    })
    console.log(response)
    res.status(200).json(response)
    
       } 
     catch (error) {
       res.status(400).json({msg: "este error no esta controlado"})
     } 
   };
   



module.exports = {
    reviewCreateByUser
};