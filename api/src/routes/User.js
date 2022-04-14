const { Router } = require("express");
const { User } = require("../db");
const { v4: uuidv4 } = require('uuid');

const user = Router();


user.get("/", async (req, res) => {
    const { id } = req.query;
    if(id){
        try {
            const user = await User.findByPk(id);
            res.status(200).send(user);
        } catch (error) {
            res.status(404).json('ocurrio un error: '+ error);
        }
    }
    else{
        try {
            const users = await User.findAll();
            res.status(200).send(users);
        } catch (error) {
            res.status(404).json('ocurrio un error: '+ error);
        }
    }
});

user.post("/", async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            email,
            password,
            estado, 
            imagen
        } = req.body;
        const findEmail = await User.findOne({
            where: {
                email
            }
        });
        if(findEmail) throw Error("El email ya se encuentra en uso");
        const user = await User.create({
            id: uuidv4(),
            nombre,
            apellido,
            email,
            password,
            estado, 
            imagen
        });
        res.status(200).send(user)
    } catch (error) {
      res.status(404).json('ocurrio un error: '+ error);
    }
});

user.put("/", async (req, res) => {
    const { id } = req.query;
    const {
        nombre,
        apellido,
        email,
        password,
        estado, 
        imagen
    } = req.body;
    try {
        const user = await User.findByPk(id);
        await user.update({
            nombre: nombre ? nombre : user.nombre,
            apellido: apellido ? apellido : user.apellido,
            email: email? email : user.email,
            password: password ? password : user.password,
            estado: estado ? estado : user.estado, 
            imagen: imagen ? imagen : user.imagen
        })
        res.status(200).send(user);
    } catch (error) {
        res.status(404).json('ocurrio un error: '+ error);
    }
   
});

user.delete("/", async (req, res) => {
    const { id } = req.query;
    try {
        const user = await User.findByPk(id);
        if(!user) throw Error("Id incorrecto o usuario inexistente")
        await user.destroy();
        res.status(200).send("Usuario eliminado exitosamente!");
    } catch (error) {
        res.status(404).json('ocurrio un error: '+ error);
    }
});

module.exports = user;