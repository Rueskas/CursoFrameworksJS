import React, { Component } from 'react';

class Pelicula extends Component {

    marcar = () =>{
        this.props.marcarFavorita(this.props.pelicula);
    }
    render() {
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={this.props.pelicula.image} alt={this.props.pelicula.title} />
                </div>

                <h2>{this.props.pelicula.title}</h2>
                <span className="date">Hace 5 min</span>
                <a href="#">Leer más</a>
                <button onClick={this.marcar}>Marcar como favorita</button>
                <div className="clearfix"></div>
            </article>
        )
    }
}

export default Pelicula;