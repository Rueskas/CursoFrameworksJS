'use strict'

const mongoose = require('mongoose');
const app = require('./app');
var port = 3900;
const url = 'mongodb://localhost:27017/api_rest_blog'
const options = {
    userNewUrlParser: true
}

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(url, options)
    .then(() =>{
        console.log("Conexion establecida");
        
        //Crear servidor y ponerme a escuchar peticiones HTTP
        app.listen(port, () =>{
            console.log("Servidor corriendo");
        });
    });