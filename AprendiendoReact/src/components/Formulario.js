import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    bioRef = React.createRef();
    generoHRef = React.createRef();
    generoMRef = React.createRef();
    generoORef = React.createRef();
    state = {
        user: {}
    }

    recibirForm = (e) =>{
        e.preventDefault();

        var genero = 'man';
        if(this.generoHRef.current.checked){
            genero = 'hombre';
        } else if (this.generoMRef.current.checked){
            genero = 'mujer';
        } else{
            genero = 'otro';
        }
        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidoRef.current.value,
            biografia: this.bioRef.current.value,
            genero: genero 
        }

        this.setState({
            user: user
        })

        console.log(user);
    }


    render() {

        return (
            <React.Fragment>
                <Slider title="Formulario" className="slider-small" />

                <div className="center">
                    <section id="content">
                        <h1 className="subheader">Formulario</h1>
                        {
                            this.state.user.nombre && 
                            (
                                <div id="userData">
                                    <p>
                                        Nombre: <strong>{this.state.user.nombre}</strong>
                                    </p>
                                </div>
                            )
                        }
                        {
                            this.state.user.apellidos && 
                            (
                                <div id="userData">
                                    <p>
                                        Apellidos: <strong>{this.state.user.apellidos}</strong>
                                    </p>
                                </div>
                            )
                        }
                        {
                            this.state.user.biografia && 
                            (
                                <div id="userData">
                                    <p>
                                        Biografia: <strong>{this.state.user.biografia}</strong>
                                    </p>
                                </div>
                            )
                        }
                        {
                            this.state.user.genero && 
                            (
                                <div id="userData">
                                    <p>
                                        Genero: <strong>{this.state.user.genero}</strong>
                                    </p>
                                </div>
                            )
                        }

                        <form className="mid-form" onSubmit={this.recibirForm} onChange={this.recibirForm}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="surname">Apellidos</label>
                                <input type="text" name="nombre" ref={this.apellidoRef}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografía</label>
                                <textarea name="nombre" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radiobuttons">
                                <input type="radio" name="gender" value="man" ref={this.generoHRef}/>Hombre
                                <input type="radio" name="gender" value="woman" ref={this.generoMRef}/>Mujer
                                 <input type="radio" name="gender" value="other" ref={this.generoORef} defaultChecked/>Otro
                            </div>
                            <div className="clearfix"></div>

                            <input type="submit" value="submit" className="btn btn-success" />
                        </form>
                    </section>
                    <Sidebar />
                </div>

            </React.Fragment>
        )
    }

}

export default Formulario;