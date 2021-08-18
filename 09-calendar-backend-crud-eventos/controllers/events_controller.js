const { response } = require("express");
const Evento = require("../models/evento_model");

const getEventos = async(req, res = response) => {

  // traer todos los events de la BD
  const eventos = await Evento.find()
                              // .populate('user'); 
                              // // populate permite no solo traer el id del usuario sino sus demas campos del user
                              .populate('user', 'name password'); 
                              // definir 'name', solo quiere decir que traiga el name del user

  res.status(200).json({
    ok: true,
    msg: "getEventos",
    eventos
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
