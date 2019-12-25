import React from 'react';
import './assets/css/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <SeccionPruebas/>
        <Sidebar />
        <div className="clearfix"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
