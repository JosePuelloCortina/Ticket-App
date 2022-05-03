const { conn } = require("../../db");
const { Review, User } = conn.models;

const reviewByCategory = async(req, res) => {
    const { idMovies} = req.params
  
    try{
    const response = await Review.findAll({ where: { moviesId: idMovies, },})
     response.map(async  i => {
      const user = await User.findByPk(i.userId)
      //  console.log(user, "este es el user que esta 34")  
      // console.log('esto es la i', i)
        return {
          review: i.dataValues, 
          user: user.dataValues.username
        }
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json(error)
  }
  };
  module.exports = {
    reviewByCategory
};