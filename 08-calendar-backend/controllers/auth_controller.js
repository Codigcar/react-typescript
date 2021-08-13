const express = require('express');

const crearUsuario = (req,res = express.response) => {

    const {name, email, password} = req.body;
    // console.log(req);

    if ( name.length < 5 ) {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe ser de 5 letras mmínimo'
        })
    }


    res.json({
        ok:true,
        msg: 'registro22',
        name: name,
        email: email,
        password, password
      });
}

const loginUsuario = (req, resp = express.response) => {
    res.json({
        ok:true,
        msg: 'login'
    })
}

const revalidarToken = (req, resp = express.response) => {
    res.json({
        ok:true,
        msg:'renew'
    })
}


  module.exports = {
      crearUsuario,
      loginUsuario,
      revalidarToken
  }