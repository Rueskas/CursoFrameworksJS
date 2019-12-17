import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        console.log("Componente Cargado");
        this.titulo = "Hola mundo, soy mi COMPONENTE";
        this.comentario = "Este es mi primer comentario";
        this.year = 2000;
        this.mostrarPeliculas = true;
    }

    ocultarPelicula(){
        this.mostrarPeliculas = false;
    }
}
