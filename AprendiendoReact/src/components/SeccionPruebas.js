import React, { Component } from 'react';
import MiComponente from './MiCompontente';

class SeccionPruebas extends Component {

    contador = 0;

    /* Primera Opcion
    constructor(props){
        super(props);

        this.state ={
            contador: 0
        }
    }*/

    //Segunda opcion

    state = {
        contador: 0
    }

    HolaMundo(nombre, edad) {
        var presentacion = <div>
            <h2>Hola soy {nombre}</h2>
            <h3>Tento {edad} años</h3>
        </div>
        return presentacion;
    };

    /* Necesita bind(this)
    sumar(){
        //this.contador++;
        //this.state.contador++;
        this.setState({
            contador: this.contador++
        })
    }

    restar(){
        //this.contador--;
        //this.state.contador--;
        this.setState({
            contador: this.contador--
        })
    }*/

    //No necesita bind(this)
    sumar = () => {
        //this.contador++;
        //this.state.contador++;
        this.setState({
            contador: this.contador++
        })
    }

    restar = () => {
        //this.contador--;
        //this.state.contador--;
        this.setState({
            contador: this.contador--
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="subheader">Últimos articulos</h2>
                <p>
                    Hola bienvenido al proyecto de React
                </p>


                <h2 className="subheader">Funciones y JSX</h2>
                {
                    this.HolaMundo("sergio", 19)
                }
                <hr />
                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                </section>


                <h2 className="subheader">Estados</h2>
                <p>
                    Contador {this.contador}
                </p>
                <p>
                    <button onClick={this.sumar}>Sumar</button>
                    <button onClick={this.restar}>Restar</button>
                </p>
            </React.Fragment>
        );
    }
}

export default SeccionPruebas;