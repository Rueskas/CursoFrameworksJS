import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public peliculas: any[];

  public titulo: String;
  constructor() { 
    console.log("Contructor Lanzado");
    this.titulo = "Componente peliculas";
    this.peliculas = [
      {year: 2002, title: "Spiderman 4", image: "https://www.infobae.com/new-resizer/XkfkqIeQ16c2-lbWKdS7OFcbWoY=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/16142656/Spiderman.jpg"},
      {year: 2019, title: "Los vengadores", image: "https://i.blogs.es/876f04/los-vengadores-4/450_1000.jpg" },
      {year: 2019, title: "El risas", image: "https://i.blogs.es/d0ea1e/joker-joaquin-phoenix/450_1000.jpg"},
      {year: 2014, title: "Harry Potter y el caliz de fuego", image: "https://i.ytimg.com/vi/CKt0PQFECfs/maxresdefault.jpg"}
    ]
  }

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
}
