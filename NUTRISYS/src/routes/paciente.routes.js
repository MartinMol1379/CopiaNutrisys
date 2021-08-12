const path = require('path');
const express = require('express');
const http=require('http');
const router = express.Router();
const app = express();
import {actualizarPaciente, eliminarPaciente, getPacienteAPDoc, getPacienteHCAP, getPacienteHCDoc, getPacienteLikeDoc, getPacienteLikeHC, getPacienteMixto, getPacientes, getPacienteXap, getPacienteXHC, nuevoPaciente} from "../controllers/paciente.controller";


//router.get('/nuevopaciente',(req,res) => {
//  res.render('registrarPacienteNuevo.html')
//});

//ACCESO A PÁGINAS
  //Registrar paciente
  router.get('/pacientes/nuevopaciente', (req,res) => {
    res.render('pacientes/registrarPacienteNuevo.html');
});
  //Buscar pacientes
  router.get('/pacientes/buscarpaciente', (req,res) => {
    res.render('pacientes/historiaClinicaMP.html');
});
  //consulta hc paciente
  router.get('/pacientes/consultapaciente/hc=:pac_nrohc', (req,res) => {
    res.render('pacientes/historiaClinicaPaciente.html');
});
  //consulta hc paciente - Documentos
  router.get('/pacientes/consultapacientedocumentos/:pac_nrohc', (req,res) => {
    res.render('pacientes/documentosPaciente.html');
  });
  //consulta hc paciente - Estudios
  router.get('/pacientes/consultapacienteestudios/:pac_nrohc', (req,res) => {
    res.render('pacientes/estudiosPaciente.html');
  });
  //consulta hc paciente - Evoluciones
  router.get('/pacientes/consultapacienteevolucion/:pac_nrohc', (req,res) => {
    res.render('pacientes/evolucionesPaciente.html');
  });
  //consulta hc paciente - Ficha Inicial
  router.get('/pacientes/consultapacientefichainicial/:pac_nrohc', (req,res) => {
    res.render('pacientes/fichainicialPaciente.html');
   });
 //consulta hc paciente - Fichas
  router.get('/pacientes/consultapacientefichas/:pac_nrohc', (req,res) => {
    res.render('pacientes/fichasPaciente.html');
  });
 //consulta hc paciente - Planes
 router.get('/pacientes/consultapacienteplan/:pac_nrohc', (req,res) => {
  res.render('pacientes/planesPaciente.html');
});



//ACCESO A DATOS
  //Alta, Baja, Modif
router.post('/pacientes', nuevoPaciente)
router.delete('/paciente/:pac_nrohc', eliminarPaciente)
router.put('/pacientes/:pac_nrohc', actualizarPaciente)

  //Consultas
router.get('/pacientes', getPacientes)
router.get('/paciente/:pac_nrohc', getPacienteXHC)
router.get('/pacientes/hc=:pac_nrohc',getPacienteLikeHC)
router.get('/pacientes/doc=:pac_nrodoc',getPacienteLikeDoc)
router.get('/pacientes/ap=:pac_apellido', getPacienteXap)
router.get('/pacientes/hc=:pac_nrohc/ap=:pac_apellido/doc=:pac_nrodoc', getPacienteMixto)
router.get('/pacientes/hc=:pac_nrohc/ap=:pac_apellido', getPacienteHCAP)
router.get('/pacientes/hc=:pac_nrohc/doc=:pac_nrodoc', getPacienteHCDoc)
router.get('/pacientes/ap=:pac_apellido/doc=:pac_nrodoc', getPacienteAPDoc)


module.exports = router;
