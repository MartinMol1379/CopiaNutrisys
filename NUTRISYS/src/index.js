const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');

//Initializions
const app = express();
require('./database/index');

//Settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));

//Middlewares
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.engine ('html', require ('ejs'). renderFile);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//Global Variables

//Routes
app.use(require('./routes/fichas.routes'));
app.use(require('./routes/paciente.routes'));
app.use(require('./routes/usuario.routes'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));

//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Servidor en Puerto', app.get('port'))
});



