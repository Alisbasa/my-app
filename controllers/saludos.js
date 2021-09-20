const express = require("express")

function culiacan(req, res, next) {
    
    res.send(`Saludos cordiales hasta culiacan`);
}

function ciudad(req, res, next) {
    const ciudad = req.params.c1;
    res.send(`Saludos cordiales hasta ${ciudad}`);
}
function nombre(req, res, next) {
    const nombre = req.body.n1;
    res.send(`Saludos cordiales para ${nombre}`);
}



module.exports = {
    culiacan, ciudad, nombre
}
