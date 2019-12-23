import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Articulo } from 'src/app/models/articulo';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticuloService]
})
export class BlogComponent implements OnInit {

  public articles: Articulo[];
  public url: string;

  constructor(
    private _articuloService: ArticuloService
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this._articuloService.getArticles().subscribe(
      response =>{
        if(response.articles){
          this.articles = response.articles;
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

}
