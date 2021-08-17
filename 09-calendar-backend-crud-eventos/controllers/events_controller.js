const { response } = require("express");
const Evento = require("../models/evento_model");

const getEventos = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "getEventos",
  });
};

const crearEvento = async (req, res = response) => {

  const EventCreated = new Evento(req.body);
  try {

    // el req.ui lo extrae del token ingresado
    EventCreated.user = req.uid;
    await EventCreated.save();

    // verificar que tenga el evento
    console.log("crearEvento: ", req.body);
    res.status(200).json({
      ok: true,
      msg: "crearEvento",
      EventCreated,
    });
  } catch (error) {
    console.log('Error en crearEvento: ',error );
    res.status(500).json({
        ok: false,
        msg: 'Hable con el administrador'
    })
  }
};

const actualizarEvento = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "getEventos",
  });
};

const eliminarEvento = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "getEventos",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
