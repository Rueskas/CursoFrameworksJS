'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Article = require('../models/article');

var controller = {
    datosCurso: (request, response) =>{
        return response.status(200).send({
            curso: 'Frameworks en JS',
            author: 'Victor Robles',
            url: 'Udemy.com'
        });
    },

    test: (request, response) =>{
        return response.status(200).send({
            message: 'Soy la accion del test'
        })
    },

    save: (req, res) =>{
        //Recoger parametros por post
        var params = req.body;
        
        //Validar datos (Validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch(err){
            return res.status(200).send({
                status: 'Error',
                message: 'Faltan datos por enviar'
            })
        }

        if(validate_title && validate_content){
            //Crear el objeto 
            let img = null;
            if(params.image){
                img = params.image
            }
            var article = new Article({
                title: params.title,
                content: params.content,
                image: img
            });
            //Guardar
            article.save()
                .then( articleResult =>{
                    //Devolver respuesta
                    return res.status(200).send({
                        status: 'Success',
                        article: articleResult
                    })
                })
                .catch(error =>{
                    return res.status(404).send({
                        status: 'Error',
                        message: 'El articulo no se ha guardado'
                })
            })  
        } else{
            return res.status(200).send({
                status: 'Error',
                message: 'Los datos no son validos'
            })  
        }
    },

    getArticles: (req, res) =>{

        var last = req.params.last;
        var query = Article.find({});
        if(last || last != undefined){
            query.limit(5);
        }
        
        query.sort('-date')
            .then( articles => {
                if(articles.length == 0){
                    return res.status(404).send({
                        status: 'Error',
                        message: 'No existen articulos'
                    })
                }
                return res.status(200).send({
                    status: 'Success',
                    articles
                })
            })
            .catch(error=>{
                return res.status(500).send({
                    status: 'Error',
                    message: 'Error al devolver los articulos'
                })
            })
        
    },

    getArticle: (req, res) =>{
        //Recoger el id
        var articleId = req.params.id;

        //Comprobar que existe
        if(!articleId || articleId == null){
            return res.status(404).send({
                status: 'Error',
                message: 'No existe el articulo'
            })
        }
        
        //Buscar el articulo

        Article.findById(articleId, (error, article) =>{
            if(error || !article){
                console.log(error);
                return res.status(404).send({
                    status: 'Error',
                    message: 'No existe el articulo'
                })
            }

            return res.status(200).send({
                status: 'Success',
                article
            })
        });

    },

    update: (req, res) =>{
        //Recoger el id
        let articleId = req.params.id;

        //Recoger los datos
        let params = req.body;

        //Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(error){
            return res.status(404).send({
                status: 'Error',
                message: 'Faltan datos por enviar'
            })
        }

        if(validate_title && validate_content){
            //Find y update
            Article.findByIdAndUpdate(articleId, params, {new: true})
                .then( articleResult =>{
                    //Devolver respuesta
                    return res.status(200).send({
                        status: 'Success',
                        article: articleResult
                    })
                })
                .catch(error =>{
                    return res.status(404).send({
                        status: 'Error',
                        message: 'El articulo no se ha actualizado'
                    })
                })
        } else{
            return res.status(500).send({
                status: 'Error',
                message: 'Los datos no son validos'
            })  
        }
    },

    delete: (req, res) =>{
        //Recoger el id
        let articleId = req.params.id;

        //Find y Delete
        Article.findByIdAndDelete(articleId, {new: false})
            .then(result =>{
                if(result == null){
                    return res.status(500).send({
                        status: 'Error',
                        message: 'No se ha borrado el articulo (Posiblemente no exista)'
                    })
                } else{
                    return res.status(200).send({
                        status: 'Success',
                        article: result
                    })
                }
            })
            .catch(error =>{
                return res.status(500).send({
                    status: 'Error',
                    message: 'No se ha borrado el articulo (Posiblemente no exista)'
                })
            })
    },

    search: (req, res) =>{
        //Sacar el string a buscar
        var searchString = req.params.search;
        if(searchString == undefined){
            searchString = "";
        }

        //Find
        Article.find({"$or": [
            {"title": { "$regex": searchString, "$options": "i"}},
            {"content": { "$regex": searchString, "$options": "i"}}
        ]})
        .sort('-date')
        .then(result =>{
            if(result.length == 0){
                return res.status(500).send({
                    status: 'Error',
                    message: 'No coincide ningun articulo'
                })
            }
            else{
                return res.status(200).send({
                    status: 'Success',
                    articles: result
                })
            }
        })
        .catch(error =>{
            return res.status(404).send({
                status: 'Error',
                message: 'Error en la peticion'
            })
        })
    },

    upload: (req, res) =>{
        //Configurar modulo connect/multiparty router/article.js (Hecho)

        //Recoger fichero
        var fileName = 'Imagen no subida';

        if(!req.files || req.files == null){
            console.log("file no");
            return res.status(404).send({
                status: 'Error',
                message: fileName
            })
        }

        //Conseguir nombre y extension del archivo
        var filePath = req.files.file0.path;
        var fileSplit;
        try{
            fileSplit = filePath.split('\\');
            //Para linux y Mac
            if(fileSplit.length != 3){
                fileSplit = filePath.split('/');
            }
        } catch(error){
            fileSplit = filePath.split('/');
        }
        fileName = fileSplit[2];
        
        //Extension del fichero
        var extensionSplit = fileName.split('.');
        var fileExtension = extensionSplit[1];


        //Comprobar la extension (solo imagenes)
        if(fileExtension != 'png' && fileExtension != 'jpg' && fileExtension != 'jpeg' && fileExtension != 'gif'){
            //Borrar el archivo 
            fs.unlink(filePath, (error) =>{
                return res.status(404).send({
                    status: 'Error',
                    message: 'Extension no valida'
                })
            })
        }else{
            //Buscar articulo y asignarle imagen
            let articleId = req.params.id;

            if(articleId){
                Article.findByIdAndUpdate(articleId, {image: fileName}, {new: true})
                .then(result =>{
                    return res.status(200).send({
                        status: 'Success',
                        article: result
                    })
                })
                .catch(error =>{
                    return res.status(404).send({
                    status: 'Error',
                    message: 'Error al subir la imagen'
                    })
                })
            } else{
                return res.status(200).send({
                    status: 'Success',
                    imageName: fileName
                })
            }
        }

    },

    getImage: (req, res) =>{
        let file = req.params.image;
        let pathFile = './upload/articles/' + file;

        fs.exists(pathFile, (exists) =>{
            if(exists){
                return res.sendFile(path.resolve(pathFile))
            } else{
                return res.status(404).send({
                    status: 'Error',
                    message: 'La imagen no existe'
                })
            }
        })
    }
}

module.exports = controller;