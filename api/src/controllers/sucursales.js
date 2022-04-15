const { response } = require('express');
const { Sucursal, Op } = require('../db');

const getAllSucursal = async(req, res = response) => {
    try {
        const sucursales = await Sucursal.findAll({})
        res.json({ success: true, data: sucursales})        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Talk to admin'
        })
        
    }
}


