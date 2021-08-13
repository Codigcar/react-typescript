const express = require("express");
// import express from "express";

// traer variables de entornos
require('dotenv').config();
console.log(process.env);

// Crear el servidor de express
const app = express();

// Rutas
// app.get("/", (req, res) => {
//   console.log("se requiere /");
//   res.json({
//       ok:true
//   })
// });

// Reemplazo de 'Rutas' x un Directorio Público
app.use(express.static('public'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});
