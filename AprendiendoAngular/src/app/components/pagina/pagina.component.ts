import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public name: string;
  public surname: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      this.name = params.nombre; 
      this.surname = params.apellidos;
    })
  }

  redirect(){
    this._router.navigate(['/pagina-de-pruebas', 'Sergio', 'Ruescas']);
  }

}
