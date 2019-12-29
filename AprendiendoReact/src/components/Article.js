import React, { Component } from 'react';
import { Redicrect, Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/es';
import axios from 'axios';
import Global from './Global';
import Sidebar from './Sidebar';
import ImageDefault from '../assets/images/default.png';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    }

    getArticle = (id) => {
        axios.get(this.url + "article/" + id)
            .then(res => {
                if (res.data.article) {
                    this.setState({
                        article: res.data.article,
                        status: 'Success'
                    })
                } else {
                    this.setState({
                        status: 'Success'
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        var id = this.props.match.params.id;

        this.getArticle(id);
    }

    render() {
        if (this.state.article) {
            return (
                <div className="center">
                    <section id="content">
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                            {
                                this.state.article.image != null ? 
                                (
                                    <img src={this.url + 'get-image/' + this.state.article.image} alt={this.state.article.title} />
                                ) : (
                                    <img src={ImageDefault} alt={this.state.article.title} />
                                )
                            }
                                
                            </div>

                            <h1 className="subheader">{this.state.article.title}</h1>
                            <span className="date">
                                <Moment locale='es' fromNow>{this.state.article.date}</Moment>
                            </span>
                            <p>
                                {this.state.article.content}
                            </p>
                            <a href='#' className='btn btn-warning'>Editar</a>
                            <a href='#' className='btn btn-danger'>Eliminar</a>

                        
                            <div className="clearfix"></div>
                        </article>
                    </section>
                    <Sidebar />

                    <div class="clearfix"></div>
                </div>
            );
        } else if (this.state.status != null) {
            return (
                <React.Fragment>
                    <section id='content'>
                        <h1 className='subheader'>No existe el artículo que estas buscando</h1>
                        <p>No se ha encontrado el artículo, intentalo más tarde</p>
                    </section>
                    <Sidebar />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Cargando...</h1>
                    <p>Espere un momento</p>
                </React.Fragment>
            )
        }
    }
}

export default Article;