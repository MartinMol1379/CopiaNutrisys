const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();

import { registrarAnamnesis } from "../controllers/fichas.controller";

//Registrar Anamnesis
    router.get('/fichas/registrarAnamnesis', (req,res) => {
    res.render('fichas/registrarAnamnesis.html');
});

//ACCESO A DATOS
  //Alta, Baja, Modif
  router.post('/fichas', registrarAnamnesis)

module.exports = router;