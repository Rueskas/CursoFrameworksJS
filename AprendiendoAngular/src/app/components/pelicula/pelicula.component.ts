import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() marcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  marcarComoFavorita(event, pelicula){
    this.marcarFavorita.emit(pelicula);
  }

}
