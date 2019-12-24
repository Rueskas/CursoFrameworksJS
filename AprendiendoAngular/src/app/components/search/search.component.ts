import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticuloService]
})
export class SearchComponent implements OnInit {

  public articles: Articulo[];
  public search: string;
  
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticuloService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      this.search = params.search;
      this._articleService.search(this.search).subscribe(
        response =>{
          if(response.articles){
            this.articles = response.articles;
          } else{
            this.articles = [];
          }
        },
        error =>{
          console.log(error);
          this.articles = [];
        }
      ) 
    })
  }

}
