const { Router } = require("express");
const { Admin, SuperAdmin } = require("../db");
const { v4: uuidv4 } = require('uuid');

const admin = Router(); 


admin.get("/login", async (req, res) => {
    const { email, password } = req.query;
    if(id){
        try {
            const admin = await Admin.findOne({
                where: {
                    email,
                    password
                }
            });
            if(!admin) throw Error("Usuario o mail incorrectos.")
            res.status(200).send(admin);
        } catch (error) {
            res.status(404).json('ocurrio un error: '+ error);
        }
    }
    else{
        try {
            const admins = await Admin.findAll();
            res.status(200).send(admins);
        } catch (error) {
            res.status(404).json('ocurrio un error: '+ error);
        }
    }
});

admin.get("/", async (req, res) => {
    const { id } = req.query;
    if(id){
        try {
            const admin = await Admin.findByPk(id);
            res.status(200).send(admin);
        } catch (error) {
            res.status(404).json('ocurrio un error: '+ error);
        }
    }
    else{
        try {
            const admins = await Admin.findAll();
            res.status(200).send(admins);
        } catch (error) {
            res.status(404).json('ocurrio un error: '+ error);
        }
    }
});

admin.post("/", async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            email,
            password,
            isSuper, 
            imagen
        } = req.body;
        const findEmail = await Admin.findOne({
            where: {
                email
            }
        });
        if(findEmail) throw Error("El email ya se encuentra en uso");
        const admin = await Admin.create({
            id: uuidv4(),
            nombre,
            apellido,
            email,
            password,
            isSuper,
            imagen
        });
        res.status(200).send(admin)
    } catch (error) {
      res.status(404).json('ocurrio un error: '+ error);
    }
});

admin.put("/", async (req, res) => {
    const { id } = req.query;
    const {
        nombre,
        apellido,
        email,
        password,
        imagen
    } = req.body;
    try {
        const admin = await Admin.findByPk(id);
        await admin.update({
            nombre: nombre ? nombre : admin.nombre,
            apellido: apellido ? apellido : admin.apellido,
            email: email? email : admin.email,
            password: password ? password : admin.password,
            imagen: imagen ? imagen : admin.imagen
        })
        res.status(200).send(admin);
    } catch (error) {
        res.status(404).json('ocurrio un error: '+ error);
    }
   
});

admin.delete("/", async (req, res) => {
    const { id } = req.query;
    try {
        const admin = await Admin.findByPk(id);
        if(!admin) throw Error("Id incorrecto o admin inexistente")
        await admin.destroy();
        res.status(200).send("Admin eliminado exitosamente!");
    } catch (error) {
        res.status(404).json('ocurrio un error: '+ error);
    }
});

module.exports = admin;