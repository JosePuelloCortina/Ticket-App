const server = require('express').Router();
const { Sucursal, Op } = require('../db');
const axios = require('axios');

server.get("/", async function(req, res){
    try {
        Sucursal.findAll()
        .then(sucursal =>{ 
            res.json(sucursal)
        })
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
                name:{
                    [Op.iLike]: `%${name}`
                }
            }
        })
        res.send(sucursal ? sucursal : 'No existe esta sucursal!!')
    } catch (error) {
        console.log(error)        
    }
})

server.post("/add", function(req, res, next){
    const { nombre, ciudad, contacto, direccion } = req.body;
    if(!nombre || !ciudad || !contacto || !direccion){
        return res.status(422).json({error: " No se enviaron todos los datos!"})
    }
    Sucursal.create({
        nombre: nombre,
        ciudad: ciudad,
        contacto: contacto, 
        direccion: direccion
    })
    .then(sucursal =>{
        res.json(sucursal)
        console.log('Sucursal creada exitosamente!!');
    })
})

server.put("/:id", function(req, res, next){
    const { id } = req.params;
    const { nombre, ciudad, contacto, direccion } = req.body;
    if(!nombre || !ciudad || !contacto || !direccion){
        return res.status(422).json({error: " No se enviaron todos los datos!"})
    }
    Sucursal.findByPk(id)
    .then((sucursal) =>{
        res.send(sucursal.update({
            nombre: nombre,
            ciudad: ciudad,
            contacto: contacto, 
            direccion: direccion
            
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