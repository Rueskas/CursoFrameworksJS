import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  ngOnDestroy() {
    console.log("El componente se va a eliminar");
  }

  public titulo: String;
  constructor() { 
    console.log("Contructor Lanzado");
    this.titulo = "Componente peliculas";
  }

  ngOnInit() {
    console.log("Evento onInit lanzado");
  }

  ngDoCheck() {
    console.log("DoCheck lanzado");
  }

  cambiarTitulo(){
    this.titulo = this.titulo + "Cambiado";
  }
}
