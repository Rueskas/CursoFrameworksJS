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

//CORS


//Añadir prefijos a rutas / Cargar rutas
app.use('/api', articleRoutes);

//Exportar modulo (Fichero actual)
module.exports = app;