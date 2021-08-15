const express = require("express");
const Usuario = require("../models/usuario_model");
// @npm i bcryptjs
const bcrypt = require('bcryptjs');

const crearUsuario = async (req, res = express.response) => {
  try {
    const { name, email, password } = req.body;
    // console.log(req);

    // Funcion FindOne para buscar en la BD si existe el email
    let usuario = await Usuario.findOne({email: email});

    if(usuario) {
        return res.status(400).json({
            ok: false,
            msg: 'Un usuario existe con este correo',            
        });
    }

    usuario = new Usuario(req.body);

    // encriptar password
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    // -- encriptar password

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

const loginUsuario = async(req, res = express.response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({email});

    if(!usuario){
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe con ese email'
      });
    }

    // Confirmar las passwords
    const validPassword = bcrypt.compareSync(password, usuario.password);

    if(!validPassword){
      return res.status(400).json({
        ok:false,
        msg: 'Password incorrecto'
      })
    }

    // Generar el JWT

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name
    })

  } catch (error) {
    console.log('Error /: ', error);
    res.status(500).json({
        ok: false,
        msg: 'Contactar con el admin'
    });
  }
  }

/* 
  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
}; */

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
