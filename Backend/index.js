'use strict'

const mongoose = require('mongoose');
const app = require('./app');
var port = 3900;
const url = 'mongodb://ugy4djksv704vevziaje:2rT93r2wgwiyoWVQoCsj@bviffbjz8pjyfc5-mongodb.services.clever-cloud.com:27017/bviffbjz8pjyfc5'
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