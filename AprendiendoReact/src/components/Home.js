import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {

    render() {

        return (
            <React.Fragment>
                <Slider title="Bienvenido al curso en frameworks para Javascript" btn="Ir al blog" className="slider-big" />

                <div className="center">
                    <section id="content">
                        <h1 className="subheader">Últimos artículos</h1>
                        <Articles home="true"></Articles>
                    </section>
                    <Sidebar />
                </div>

            </React.Fragment>
        )
    }

}

export default Home;