import React, { Component } from 'react';
import Pelicula from './Pelicula';


class Peliculas extends Component {

    state = {
    }


    cambiarTitulo = () => {
        var peliculas = this.state.peliculas;
        peliculas[0].title = "Spiderman 2";
        this.setState({
            peliculas: peliculas
        });
    }

    marcarComoFavorita = (pelicula) => {
        console.log("Favorita marcada");
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        })

    }

    //Antes de mostrar nada por pantalla
    componentWillMount() {
        console.log("Se va a montar el componente");
        this.setState({
            peliculas: [{
                title: "Spiderman",
                image: "https://www.infobae.com/new-resizer/XkfkqIeQ16c2-lbWKdS7OFcbWoY=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/16142656/Spiderman.jpg"
            },
            {
                title: "Los vengadores",
                image: "https://i.blogs.es/876f04/los-vengadores-4/450_1000.jpg"
            },
            {
                title: "El risas",
                image: "https://i.blogs.es/d0ea1e/joker-joaquin-phoenix/450_1000.jpg"
            },
            {
                title: "Harry Potter y el Caliz de fuego",
                image: "https://i.ytimg.com/vi/CKt0PQFECfs/maxresdefault.jpg"
            }],
            nombre: "Sergio Ruescas",
            favorita: null
        })
    }

    //Se ha mostrado el componente
    componentDidMount() {
        console.log("Se ha montado el componente")
    }

    //Se va a quitar el componente
    componentWillUnmount() {
        console.log("Se va a desmontar");
    }



    render() {

        var favorita;
        if (this.state.favorita) {
            favorita = (
                <p className="favorita">
                    <strong>La pelicula favorita es:</strong>
                    <span> {this.state.favorita.title} </span>
                </p>
            )
        } else{
            favorita = (
                <p className="noFavorita">
                    <strong>No hay pelicula favorita</strong>
                </p>
            )
        }

        return (
            <div className="Peliculas">
                <h2 className="subheader">Películas</h2>
                <p>Peliculas de {this.state.nombre}</p>
                <button onClick={this.cambiarTitulo}>Cambiar titulo de Spiderman</button>
                {
                    this.state.favorita ? (
                        <p className="favorita">
                            <strong>La pelicula favorita es:</strong>
                            <span> {this.state.favorita.title} </span>
                        </p>
                    ) : (
                            <p className="noFavorita">
                                <strong>No hay pelicula favorita</strong>
                            </p>
                        )
                }
                {favorita}

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula key={i} pelicula={pelicula} marcarFavorita={this.marcarComoFavorita} />
                            )
                        })
                    }

                </div>

            </div>

        )
    }
}

export default Peliculas;