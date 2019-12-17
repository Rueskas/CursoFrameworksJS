'use strict'

//Cargar modulos node para crear servidor
const express = require('express');
const bodyParser = require('body-parser')

//Ejecutar express(http)
const app = express();

//Cargar ficheros rutas
const articleRoutes = require('./routes/article');

//Middle Wares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS (https://victorroblesweb.es/2018/01/31/configurar-acceso-cors-en-nodejs/)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Añadir prefijos a rutas / Cargar rutas
app.use('/api', articleRoutes);

//Exportar modulo (Fichero actual)
module.exports = app;