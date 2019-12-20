import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  public nombre: string;
  constructor(private _route: ActivatedRoute,
     private _router: Router) {

    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      this.nombre = params.nombre;
    })
  }

}
