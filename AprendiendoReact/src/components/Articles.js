import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    componentDidMount() {

        var home = this.props.home;
        var search = this.props.search;

        if (home !== null && home !== undefined) {
            this.getLastArticles();
        } else if (search !== null && search !== undefined) {
            this.searchArticles(search);
        } else {
            this.getArticles();
        }
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
                    status: 'Error'
                })
            });
    }

    getLastArticles = () => {
        axios.get(this.url + "articles/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: res.data.status
                })
            })
            .catch(error => {
                this.setState({
                    status: 'Error'
                })
            });
    }

    searchArticles = (search) => {
        console.log(search);
        axios.get(this.url + "search/" + search)
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: res.data.status
                })
            })
            .catch(error => {
                this.setState({
                    articles: [],
                    status: 'Success'
                })
            });
    }

    render() {

        if (this.state.articles.length > 0) {
            var listArticles = this.state.articles.map(
                (article, i) => {
                    return (
                            <article className="article-item" id="article-template"  key={i}>
                                <div className="image-wrap">
                                    {
                                        article.image != null ? (
                                            <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                        ) : (
                                                <img src={ImageDefault} alt={article.title} />
                                            )
                                    }

                                </div>

                                <h2>{article.title}</h2>
                                <span className="date"><Moment fromNow>{article.date}</Moment></span>
                                <Link to={'/blog/article/' + article._id}>Leer más</Link>
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
        } else if (this.state.articles.length === 0 && this.state.status === 'Success') {
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