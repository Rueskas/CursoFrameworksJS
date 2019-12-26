import React from 'react';
import './assets/css/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';

function App() {
  var buttonString = "Ir al blog"
  return (
    <div className="App">
      <Header />
      <Slider title="Bienvenido al curso en frameworks para Javascript" btn={buttonString}/>
      <div className="center">
        <Peliculas/>
        <Sidebar />
        <div className="clearfix"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
