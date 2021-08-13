const express = require("express");

// import express from "express";

// Crear el servidor de express
const app = express();

// Rutas
app.get("/", (req, res) => {
  console.log("se requiere /");
  res.json({
      ok:true
  })
});

// Escuchar peticiones
app.listen(4000, () => {
  console.log(`servidor corriendo en el puerto ${4000}`);
});
