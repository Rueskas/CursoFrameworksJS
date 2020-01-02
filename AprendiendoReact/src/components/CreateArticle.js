import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Global from './Global';
import Sidebar from './Sidebar';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';

class CreateArticle extends Component {
    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();
    state ={
        article: {},
        selectedFile: null,
        status: null
    }

    componentWillMount(){
        this.validator = new SimpleReactValidator({
            messages: {
                required: "Este campo es requerido"
            }
        });
        
    }

    saveArticle = (e) => {
        e.preventDefault();
        this.changeState();

        if(this.validator.allValid()){

            axios.post(this.url + 'save', this.state.article)
            .then(res =>{
                
                if(res.data.article){
                    this.setState({
                        article: res.data.article,
                        status: 'waiting'
                    })
                    swal('Articulo creado', 'El articulo se ha creado correctamente', 'success');
                    if(this.state.selectedFile !== null){
                        var id = this.state.article._id;

                        const formData = new FormData();
                        formData.append(
                            'file0',
                            this.state.selectedFile,
                            this.state.selectedFile.name
                        );

                        axios.post(this.url + "upload-image/" + id, formData)
                            .then(res =>{
                                if(res.data.article){
                                    this.setState({
                                        article: res.data.article,
                                        status: 'success'
                                    })
                                } else{
                                    this.setState({
                                        article: res.data.article,
                                        status: 'error'
                                    })
                                }
                            })

                    } else{
                        this.setState({
                            status: 'success'
                        })
                    }
                } else{
                    this.setState({
                        status: 'error'
                    })
                }
            })
            .catch(error =>{
                alert("error");
                console.log(error);
            })
        } else{
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
                content: this.contentRef.current.value
            }
        });

        this.validator.showMessages();
    }

    fileChange = (e) =>{
        this.setState({
            selectedFile: e.target.files[0]
        });
    }


    render(){
        if(this.state.status === 'success'){
            return (<Redirect to="/blog"/>)
        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Artículo</h1>
                    <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Título</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState}/>
                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
                            {this.validator.message('title', this.state.article.title, 'required')}
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange}/>
                        </div>

                        <input type="submit" value="Guardar" className="btn btn-success"/>
                    </form>
                </section>
                <Sidebar/>
            </div>
        )
    }
}

export default CreateArticle;