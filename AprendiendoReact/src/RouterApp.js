import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiCompontente';
import Peliculas from './components/Peliculas';
import ErrorPage from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';


class RouterApp extends Component {

    render() {
        return (
            <Router>
                <Header />
                        <Switch>
                            {//Ejemplos de prueba
                            }
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/blog" component={Blog} />
                            <Route exact path="/peliculas" component={Peliculas} />
                            <Route exact path="/formulario" component={Formulario} />
                            <Route exact path="/prueba2" component={MiComponente} />
                            <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                                var nombre = props.match.params.nombre;
                                var apellidos = props.match.params.apellidos;
                                return (
                                    <React.Fragment>
                                        <h1>Pagina de pruebas</h1>
                                        <h2>Nombre: {nombre}</h2>
                                        {apellidos &&
                                            (
                                                <h2>Apellidos: {apellidos}</h2>
                                            )
                                        }
                                    </React.Fragment>
                                )
                            }
                            } />

                            {
                                //Ruta sin componente
                            }
                            <Route exact path="/pagina1" render={() => (
                                <React.Fragment>
                                    <h1>Hola mundo desde la pagina1</h1>
                                    <MiComponente />
                                </React.Fragment>
                            )}
                            />

                            {
                                //Ruta de error
                            }
                            <Route component={ErrorPage} />
                        </Switch>
                <div className="clearfix"></div>
                <Footer />
            </Router>
        );
    }
}

export default RouterApp;