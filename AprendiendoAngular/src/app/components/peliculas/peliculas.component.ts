import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public peliculas: Pelicula[];
  public titulo: String;
  public peliculaFavorita: Pelicula;

  constructor() { 
    console.log("Contructor Lanzado");
    this.titulo = "Componente peliculas";
    this.peliculas = [
      new Pelicula("Spiderman", 2002, "https://www.infobae.com/new-resizer/XkfkqIeQ16c2-lbWKdS7OFcbWoY=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/16142656/Spiderman.jpg"),
      new Pelicula("Los vengadores", 2019, "https://i.blogs.es/876f04/los-vengadores-4/450_1000.jpg"),
      new Pelicula("El risas", 2019, "https://i.blogs.es/d0ea1e/joker-joaquin-phoenix/450_1000.jpg"),
      new Pelicula("Harry Potter y el Caliz de fuego", 2019, "https://i.ytimg.com/vi/CKt0PQFECfs/maxresdefault.jpg"),
    ]
  }

  public favorita: Pelicula;

  ngOnInit() {
    console.log("Evento onInit lanzado");
  }

  ngDoCheck() {
    console.log("DoCheck lanzado");
  }

  ngOnDestroy() {
    console.log("El componente se va a eliminar");
  }

  cambiarTitulo(){
    this.titulo = this.titulo + "Cambiado";
  }

  mostrarFavorita(pelicula){
    this.peliculaFavorita = pelicula;
  }
}
