import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import {PeliculaService} from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public peliculas: Pelicula[];
  public titulo: String;
  public peliculaFavorita: Pelicula;

  constructor(
    private _peliculaService: PeliculaService
  ) { 
    console.log("Contructor Lanzado");
    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
  }

  public favorita: Pelicula;

  ngOnInit() {
    console.log("Evento onInit lanzado");
    console.log(this._peliculaService.holaMundo());
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
