'use strict'

var validator = require('validator');
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
            var article = new Article({
                title: params.title,
                content: params.content,
                image: null
            });
            //Guardar
            article.save()
                .then( articleResult =>{
                    //Devolver respuesta
                    return res.status(200).send({
                        stauts: 'Success',
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
        console.log(articleId);

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

    }

}

module.exports = controller;