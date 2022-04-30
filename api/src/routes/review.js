const { Router } = require('express');
const { User, Review} = require("../db");

const router = Router();

router.post('/create', async (req, res)=>{
    try{
       const {idMovies, idUser} = req.params;
     const {commentary, calification} = req.body;
     const user = await User.findByPk(idUser);
               await user?.addMovies(idMovies)
      
      const newReview = await Review.create(
       { commentary, calification},
      {   where: { movieId: idMovies, userId: idUser}, },
      )
      console.log('esta es la respuesta', newReview)
      //  response === [ 1 ]
      //  ? res.status(200).json({res: "se a creado una nueva Review"})
      //  : res.status(401).json({ msg: "id  invalido"})
      res.status(200).json({res: "se a creado una nueva Review"})
    //  const {_path} = newReview
    //  res.status(200).json(_path)
    }catch(error){
        res.status(400).json({msg: "este error no esta controlado"})
    }
});
// Ruta get para tarer todas las review del usurio
router.get('/:id', async (req, res)=>{
    const { id }=req.params;
    try{
        const response = await Review.findAll({where:{id : id },})
        response.map(async (i)=>{
            const user = await User.findByPk(i.userId)
            return{
                review : i.datavalues,
                user: user.datavalues.nombre,
            }
        })
        res.status(200).json(response)
    }catch(error){
        res.status(400).json(error)
    }
});

router.put('/update', async (req, res)=>{
    const { idMovie, idUser } = req.params;
    const { commentary, calification } = req.body;
   try {
    const response = await Review.update({calification, commentary},{
        where: {
            movieId: idMovie , 
            userId: idUser
        }
    })
    res.status(200).json(response)

    }catch(error){
        res.status(400).json({msg: error})
    }
});

router.get('/', async (req, res)=>{
    //const {}=req.body;
    try {
        const reviews = await Review.findAll({
            // include:[{model: Review,}],
        });
        res.status(200).json(reviews)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;