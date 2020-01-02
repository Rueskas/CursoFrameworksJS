import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from './Global';
import Sidebar from './Sidebar';
import SimpleReactValidator from 'simple-react-validator';
import ImageDefault from '../assets/images/default.png';
import swal from 'sweetalert';


class EditArticle extends Component {
    url = Global.url;
    articleId = null;
    titleRef = React.createRef();
    contentRef = React.createRef();
    state = {
        article: {},
        selectedFile: null,
        status: null
    }

    constructor(){
        super();
        this.validator = new SimpleReactValidator({
            messages: {
                required: "Este campo es requerido"
            }
        });
    }
    componentDidMount(){
        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);
    }

    getArticle = (id) => {
        axios.get(this.url + "article/" + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                })
            })
    }

    saveArticle = (e) => {
        e.preventDefault();
        this.changeState();

        if (this.validator.allValid()) {
            axios.put(this.url + 'article/'+ this.articleId, this.state.article)
                .then(res => {
                    if (res.data.article) {
                        
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        })
                        
                        swal('Articulo modificado', 'El articulo se ha modificado correctamente', 'success');
                        if (this.state.selectedFile !== null) {
                            var id = this.state.article._id;

                            const formData = new FormData();
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );

                            axios.post(this.url + "upload-image/" + id, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        })
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'error'
                                        })
                                    }
                                })

                        } else {
                            this.setState({
                                status: 'success'
                            })
                        }
                    } else {
                        this.setState({
                            status: 'error'
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            this.validator.showMessages();
            this.setState({
                status: 'error'
            })
        }


    }

    changeState = () => {

        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });

        this.validator.showMessages();
    }

    fileChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        });
    }


    render() {
        if (this.state.status === 'success') {
            return (<Redirect to="/blog" />)
        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar Artículo</h1>
                    {
                        this.state.article ?
                            (
                                <form className="mid-form" onSubmit={this.saveArticle}>
                                    <div className="form-group">
                                        <label htmlFor="title">Título</label>
                                        <input type="text" name="title" ref={this.titleRef} defaultValue={this.state.article.title} onChange={this.changeState} />
                                        {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="content">Contenido</label>
                                        <textarea name="content" ref={this.contentRef} defaultValue={this.state.article.content} onChange={this.changeState}></textarea>
                                        {this.validator.message('title', this.state.article.title, 'required')}
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="file0">Imagen</label>

                                        <input type="file" name="file0" onChange={this.fileChange} />
                                        <div className="image-wrap" >
                                            {
                                                this.state.article.image != null ?
                                                    (
                                                        <img className="thumb" src={this.url + 'get-image/' + this.state.article.image} alt={this.state.article.title} />
                                                    ) : (
                                                        <img className="thumb" src={ImageDefault} alt={this.state.article.title} />
                                                    )
                                            }

                                        </div>
                                    </div>

                                    <div className="clearfix"></div>
                                    <input type="submit" value="Guardar" className="btn btn-success" />
                                </form>
                            ) : (
                                <h2 className="subheader">Cargando...</h2>
                            )
                    }
                </section>
                <Sidebar />
            </div>
        )
    }
}

export default EditArticle;