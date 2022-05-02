const { Router } = require("express");
const { Compra } = require("../db");

const compra = Router();



compra.get("/", async (req, res) => {
    const { id } = req.query;
    if(id){
        try {
            const compra = await Compra.findByPk(id);
            if(!compra) throw Error("No existe tal compra con el id indicado");
            res.status(200).send(compra);
        } catch (error) {
            res.status(500).json('ocurrio un error: '+ error);
        }
    }
    else{
        try {
            const compras = await Compra.findAll();
            res.status(200).send(compras)
        } catch (error) {
            res.status(500).json('ocurrio un error: '+ error);
        }
    }
});
module.exports = compra;