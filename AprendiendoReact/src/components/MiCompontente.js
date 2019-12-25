import React, { Component } from 'react';

class MiComponente extends Component {

    render() {
        let receta = {
            nombre: "Pizza",
            ingredientes: ['tomate', 'queso', 'champiñones'],
            calorias: 1000
        }
        return (
            <div className="MiComponente">
                <h1>{receta.nombre}</h1>
                <ol>{
                    receta.ingredientes.map((ingrediente, i) => {
                        return (
                            <li key={i}>{ingrediente}</li>
                        );
                    })
                }</ol>
                <h3>{receta.calorias} Kcal</h3>
            </div>
        );
    }
}

export default MiComponente;