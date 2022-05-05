const { conn } = require("../../db");
const { Review } = conn.models;

const reviewEditByUser = async (req , res) =>{
    const { idMovies, idUser } = req.params;
    const { commentary, calification } = req.body;
   try {
    const response = await Review.update({calification, commentary},{
        where: {
            moviesId: idMovies , 
            userId: idUser
        }
    })
    res.status(200).json(response)
    } catch (error) {
        res.status(400).json({msg: error})
    }
};
module.exports = {
    
    reviewEditByUser
 
};