import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MiComponente from './components/MiCompontente';
import Peliculas from './components/Peliculas';
import ErrorPage from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Slider from './components/Slider';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
import Sidebar from './components/Sidebar';


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
                    <Route exact path="/blog/article/:id" component={Article} />
                    <Route exact path="/blog/edit/:id" component={EditArticle} />
                    <Route exact path="/blog/new" component={CreateArticle} />
                    <Route exact path="/blog/busqueda/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={
                        (props) => {
                            var search = props.match.params.search;
                            return (<Redirect to={"/blog/busqueda/" + search} />)
                        }
                    } />
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
                            <Slider className="slider-small" title="Pagina 1" />
                            <div className="center">
                                <section id="content">
                                    <h1 className="subheader">Hola mundo desde la pagina1</h1>
                                    <MiComponente />
                                </section>
                                <Sidebar />
                            </div>
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