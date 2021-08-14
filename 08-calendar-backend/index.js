// import express from "express";
const express = require("express");
// traer variables de entornos
require('dotenv').config();
const { dbConnection } = require("./database/config");

// console.log(process.env);

// Crear el servidor de express
const app = express();

// conexión Base de datos con MongoBD Atlas
dbConnection();


// Directorio pubico
// Reemplazo de 'Rutas' x un Directorio Público
app.use(express.static('public'));



// Lectura y parseo del body 
app.use(express.json()); /* middleware */

// Rutas

// app.get("/", (req, res) => {
//   console.log("se requiere /");
//   res.json({
//       ok:true
//   })
// });
app.use('/api/auth', require('./routes/auth'));
// end-- Rutas


// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});
