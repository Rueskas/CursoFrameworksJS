import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import MiComponente from './components/MiCompontente';
import Peliculas from './components/Peliculas';

function HolaMundo(nombre, edad){
  var presentacion = <div>
    <h2>Hola soy {nombre}</h2>
    <h3>Tento {edad} años</h3>
  </div>
  return presentacion;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          HolaMundo("sergio", 19)
        }
        <hr/>
        <section className="componentes">
          <MiComponente/>
          <Peliculas/>
        </section>
      </header>
    </div>
  );
}

export default App;
