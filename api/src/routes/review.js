// const { Router } = require('express');
// const { User, Review} = require("../db");
// const { v4: uuidv4 } = require('uuid');

// const router = Router();

// // router.post('/movies/:idMovies/user/:idUser', async (req, res)=>{
// //     try{
// //        const {idMovies, idUser} = req.params;
// //      const {commentary, calification} = req.body;
     
// //      const user = await User.findByPk(idUser);
// //                await user?.addMovies(idMovies)
// //       const newReview = await Review.update({ commentary, calification},
// //           { where: { moviesId: idMovies, userId: idUser}, },
// //           )
// //       console.log('esta es la respuesta', newReview)

// //       res.send({res: "se a creado una nueva Review"})

// //     }catch(error){
// //         res.status(400).json({msg: "este error no esta controlado"})
// //     }
// // });
// router.post('/create', async(req, res)=>{
//     try {
//         const {commentary, calification, idMovies, idUser} = req.body;
//         let findedUser = await User.findOne({
//             where: {
//                 movieId: idMovies , 
//                 userId: idUser
//             },
//         });
//         const newReview =await Review.create({
//             id: uuidv4(),
//             commentary,
//             calification,
//             // idMovies,
//             // idUser
//         })
//         findedUser = await User.findOne({
//             where: {
//                 movieId: idMovies , 
//                 userId: idUser
//             }
//         });
//         console.log(newReview)
//         res.status(200).send(findedUser, 'seep');
//         //res.send({ message: "nuevo review" });
//     } catch (error) {
        
//     }
// })

// // Ruta get para tarer todas las review del usurio
// router.get('/:id', async (req, res)=>{
//     const { id }=req.params;
//     try{
//         const response = await Review.findAll({where:{id : id },})
//         response.map(async (i)=>{
//             const user = await User.findByPk(i.userId)
//             return{
//                 review : i.datavalues,
//                 user: user.datavalues.nombre,
//             }
//         })
//         res.status(200).json(response)
//     }catch(error){
//         res.status(400).json(error)
//     }
// });

// router.put('/update', async (req, res)=>{
//     const { idMovie, idUser } = req.params;
//     const { commentary, calification } = req.body;
//    try {
//     const response = await Review.update({calification, commentary},{
//         where: {
//             movieId: idMovie , 
//             userId: idUser
//         }
//     })
//     res.status(200).json(response)

//     }catch(error){
//         res.status(400).json({msg: error})
//     }
// });

// router.get('/', async (req, res)=>{
//     //const {}=req.body;
//     try {
//         const reviews = await Review.findAll({
//             // include:[{model: Review,}],
//         });
//         res.send(reviews)
//     } catch (error) {
//         console.log(error)
//     }
// })

// module.exports = router;
const { Router } = require('express');
const { reviewByCategory } = require('../Controllers/Review/reviewByCategory');
const { reviewEditByUser } = require('../Controllers/Review/reviewEditByUser');
const {reviewCreateByUser} = require('../Controllers/Review/reviewCreateByUser');

const router = Router();

// ------------------ esta ruta es para CREAR REVIEW 

router.post('/movies/:idMovies/user/:idUser', reviewCreateByUser);

// -------------------- Ruta PUT para modificar las review del usuario ya que solo hay uno por usuario

router.put( '/movies/:idMovies/user/:idUser', reviewEditByUser);

// ------------------ Ruta get para tarer todas las review del usurio

router.get('/movies/:idMovies', reviewByCategory);

module.exports = router;