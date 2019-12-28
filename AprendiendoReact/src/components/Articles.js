import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from './Global';
import ImageDefault from '../assets/images/default.png'

class Articles extends Component {

    url = Global.url;
    state = {
        articles: [],
        status: null
    }

    componentWillMount() {
        this.getArticles();
    }


    getArticles = () => {
        
        axios.get(this.url + "articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: res.data.status
                })
            })
            .catch(error => {
                this.setState({
                    status: error.data.status
                })
            });
    }

    render() {

        if (this.state.articles.length > 0) {
            var listArticles = this.state.articles.map(
                (article) =>{
                    return (
                        <article className="article-item" id="article-template">
                        <div className="image-wrap">
                        {
                            article.image != null ? (
                                <img src={this.url + 'get-image/' + article.image} alt={article.title}/>
                            ) : (
                                <img src={ImageDefault} alt={article.title}/>
                            )
                        }
                           
                        </div>
        
                        <h2>{article.title}</h2>
                        <span className="date"><Moment fromNow>{article.date}</Moment></span>
                        <a href="#">Leer más</a>
                        <div className="clearfix"></div>
                    </article>
                    )
                }
            )
            return (

                <div id="articles">
                    {listArticles}
                </div>
            )
        } else if (this.state.articles.length == 0 && this.state.status == 'Success') {
            return (

                <div id="articles">
                    <h2 className="subheader">No hay artículos para mostrar</h2>
                    <p>Todavía no se ha introducido ningún artículo</p>
                </div>
            )
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            )
        }
    }
}

export default Articles;