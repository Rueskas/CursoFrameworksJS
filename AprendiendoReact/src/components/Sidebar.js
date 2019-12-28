import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Sidebar extends Component {
    searchRef = React.createRef();
    state ={
        search: '',
        
    }
    search = (e) => {
        e.preventDefault();
        console.log("LLega search");
        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        })
    }

    
    render() {

        if(this.state.redirect && this.state.search != ''){
            return(
                <Redirect to={"/redirect/"+this.state.search}/>
            )
        }

        return (
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="#" className="btn btn-success">Crear artículo</a>
                </div>
                <div id="nav-search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el articulo que buscas</p>
                    <form onSubmit={this.search}>
                        <input type="text" name="search" ref={this.searchRef}/>
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;