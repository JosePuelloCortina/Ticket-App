const server = require('express').Router();
const { Sucursal, Ticket, Op } = require('../db');
const { v4: uuidv4 } = require('uuid');

server.get("/", async function(req, res){
    try {
        const sucursales = await Sucursal.findAll({
            include: {
                model: Ticket
            }
        });
        res.status(200).send(sucursales);
    } catch (error) {
        console.log(error)
    }
})

server.get("/id/:id", async function(req, res, next){
    try {
        const { id } = req.params;
        let sucursal;
        if(isNaN(id)){
            sucursal = await Sucursal.findOne({
                where:{
                    id: id
                },
                include: {
                    model: Ticket
                }
            })
        }
        res.send(sucursal ? sucursal : 'No existe esta sucursal!!')
        
    } catch (error) {
        console.log(error)        
    }
})

server.get('/search', async function(req, res, next){
    try {
        const {name} = req.query;
        let sucursal = await Sucursal.findAll({
            where:{
                pais:{
                    [Op.iLike]: `%${name}`
                }
            },
            include: {
                model: Ticket
            }
        })
        res.send(sucursal ? sucursal : 'No existe esta sucursal!!')
    } catch (error) {
        console.log(error)        
    }
})

server.post("/add", async function(req, res, next){
    const { pais, provincia, ciudad, direccion } = req.body;
    if(!pais || !provincia || !ciudad || !direccion){
        return res.status(422).json({error: " No se enviaron todos los datos!"})
    }
    await Sucursal.create({
        id: uuidv4(),
        pais,
        provincia,
        ciudad,
        direccion,
    })
    res.status(200).send("sucursal creada")
})

server.put("/:id", async function(req, res, next){
    const { id } = req.params;
    const { pais, provincia, ciudad, direccion } = req.body;
    if(!pais || !provincia || !ciudad || !direccion){
        return res.status(422).json({error: " No se enviaron todos los datos!"})
    }
    await Sucursal.findByPk(id)
    .then((sucursal) =>{
        res.send(sucursal.update({
            pais,
            provincia,
            ciudad,
            direccion,
            
        }))  
    }).catch(next)
    
})

server.delete('/:id', async function(req, res, next){
    const { id } = req.params;
    try {
        const sucursal = await Sucursal.findByPk(id)
        if(!sucursal) throw Error("Id incorrecto o sucursal inexistente")
        await sucursal.destroy() ;
        res.status(200).send("Sucursal eliminada exitozamente!")
        
    } catch (error) {
        console.log(error)
        
    }
    
})




module.exports = server; 