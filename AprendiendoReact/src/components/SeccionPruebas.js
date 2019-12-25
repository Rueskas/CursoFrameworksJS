import React, { Component } from 'react';
import MiComponente from './MiCompontente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {
    HolaMundo(nombre, edad) {
        var presentacion = <div>
          <h2>Hola soy {nombre}</h2>
          <h3>Tento {edad} años</h3>
        </div>
        return presentacion;
      };

    render() {
        return (
            <section id="content">
            <h2 className="subheader">Últimos articulos</h2>
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
            </p>
                    {
                        this.HolaMundo("sergio", 19)
                    }
                    <hr />
                    <section className="componentes">
                        <MiComponente />
                        <Peliculas />
                    </section>
                </header>
            </section>

        );
    }
}

export default SeccionPruebas;