import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticuloService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public lastArticles: Articulo[];
  constructor(
    private _articleService: ArticuloService
  ) { 
    this.title = "Últimos articulos";
  }

  ngOnInit() {
    this._articleService.getArticles(true).subscribe(
      response => {
        if(response.articles){
          this.lastArticles = response.articles;
        }
      },
      error =>{
        console.log(error);
      }
    )
  }

}
