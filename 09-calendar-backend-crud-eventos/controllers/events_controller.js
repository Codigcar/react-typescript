const { response } = require("express");
const Evento = require("../models/evento_model");

const getEventos = async (req, res = response) => {
  // traer todos los events de la BD
  const eventos = await Evento.find()
    // .populate('user');
    // // populate permite no solo traer el id del usuario sino sus demas campos del user
    .populate("user", "name password");
  // definir 'name', solo quiere decir que traiga el name del user

  res.status(200).json({
    ok: true,
    msg: "getEventos",
    eventos,
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
    console.log("Error en crearEvento: ", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarEvento = async (req, res = response) => {
  const eventoId = req.params.id;
  // traer el uid del token
  const uid = req.uid;

  try {
    const eventoBD = await Evento.findById(eventoId);

    if (!eventoBD) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese id",
      });
    }

    if (eventoBD.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio de editar este evento",
      });
    }

    const nuevoEvento = {
      ...req.body,
      user: uid,
    };

    // Muestra el evento pasado en la respuesta JSON
    // const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento);

    // Para que muestre el evento actualizado actual
    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoId,
      nuevoEvento,
      { new: true }
    );

    res.json({
      ok: true,
      evento: eventoActualizado,
    });
  } catch (error) {
    console.log("error actualizarEvento: ", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const eliminarEvento = async(req, res = response) => {
  const eventoId = req.params.id;
  // traer el uid del token
  const uid = req.uid;

  try {
    const eventoBD = await Evento.findById(eventoId);

    if (!eventoBD) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese id",
      });
    }

    if (eventoBD.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio para eliminar este evento",
      });
    }

    await Evento.findByIdAndDelete(eventoId);

    res.json({
      ok: true,
    });


  } catch (error) {
    console.log("error eliminarEvento: ", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
