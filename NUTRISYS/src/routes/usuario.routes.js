const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');

import { getUsuario } from "../controllers/usuario.controller";

const KEY = process.env.KEYSECRET ;
//ACCESO A PAGINAS
  //login
  router.get('/usuarios/login', (req,res) => {
    res.render('usuarios/iniciarSesion.html');
  });


//login
router.post('/usuarios/login', (req,res) => {
  const usr = {
    "usu" : "usu",
    "pass": "pass"
  }
  
  jwt.sign({usr: usr}, `${KEY}`, (err, token) => {
    res.json({
      token: token
    })
  })
});

router.post("/pacientes/buscarpaciente", verifyToken, (req, res) => {
  jwt.verify(req.token, `${KEY}`, (error, authData) => {
    if(error){
      res.sendStatus(403);
    }else{
      res.json({
        data: "OK",
        authData
      })
    }
  }
  )
})

function verifyToken(req, res, next) {
  const BH = req.headers['authorization'];

  if(typeof BH !== 'undefined'){
    const BT = BH.split(" ")[1];
    req.token = BT;
    next();
  }else{
    res.sendStatus(403);
  }
}

//ACCESO A DATOS
router.get('/usuario/:usu_usuario/:usu_clave', getUsuario)

module.exports = router;
//ACCESO A PAGINAS
  //login
  router.get('/usuarios/login', (req,res) => {
    res.render('usuarios/iniciarSesion.html');
  });

//ACCESO A DATOS
router.get('/usuario/:usu_usuario/:usu_clave', getUsuario)

module.exports = router;