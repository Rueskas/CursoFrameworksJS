import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticuloService]
})
export class ArticleNewComponent implements OnInit {
  public article: Articulo;
  public status: string;
  constructor(
    private _articleService: ArticuloService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.article = new Articulo('', '', '', null, null); 
  }

  ngOnInit() {
  }

  onSubmit(){
    this._articleService.postArticle(this.article).subscribe(
      response => {
        if(response.status == "Success"){
          this.status = response.status;
          this.article = response.article;
          this._router.navigate(["/blog/article", this.article._id]);
        } else{
          this.status = response.status;
        }
      },
      error =>{
        this.status = error.status;
      }
    )
  }

}
