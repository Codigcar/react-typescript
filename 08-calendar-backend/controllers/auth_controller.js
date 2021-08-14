const express = require("express");
const Usuario = require("../models/usuario_model");

const crearUsuario = async (req, res = express.response) => {
  try {
    const { name, email, password } = req.body;
    // console.log(req);

    let usuario = await Usuario.findOne({email: email});

    if(usuario) {
        return res.status(400).json({
            ok: false,
            msg: 'Un usuario existe con este correo',            
        });
    }

    usuario = new Usuario(req.body);
    await usuario.save();

    // if ( name.length < 5 ) {
    //     return res.status(400).json({
    //         ok: false,
    //         msg: 'El nombre debe ser de 5 letras mmínimo'
    //     })
    // }

    res.status(201).json({
      ok: true,
      msg: "Usuario registrado con exito",
      uid: usuario.uid,
      name: usuario.name,
      email: usuario.email,
      password: usuario.password,
    });
  } catch (error) {
      console.log('Error /new: ', error);
      res.status(500).json({
          ok: false,
          msg: 'Contactar con el admin'
      });
  }
};

const loginUsuario = (req, res = express.response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const revalidarToken = (req, resp = express.response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
