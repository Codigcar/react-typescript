const {response} = require("express");

const getEventos = (req, res = response ) => {
    res.status(200).json({
        ok: true,
        msg: 'getEventos'
    })
}

const crearEvento = (req, res = response ) => {

    // verificar que tenga el evento
    console.log('crearEvento: ',req.body);
    res.status(200).json({
        ok: true,
        msg: 'crearEvento'
    })
}

const actualizarEvento = (req, res = response ) => {
    res.status(200).json({
        ok: true,
        msg: 'getEventos'
    })
}

const eliminarEvento = (req, res = response ) => {
    res.status(200).json({
        ok: true,
        msg: 'getEventos'
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}