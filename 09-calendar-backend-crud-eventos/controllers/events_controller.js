const {response} = require("express");

const getEventos = (req, res = response ) => {
    res.status(200).json({
        ok: true,
        msg: 'getEventos'
    })
}

const crearEvento = (req, res = response ) => {
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