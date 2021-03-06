import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticuloService]
})
export class ArticleComponent implements OnInit {

  public article: Articulo;
  public url: string;
  constructor(
    private _articuloService: ArticuloService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        let id = params['id'];

        this._articuloService.getArticle(id).subscribe(
          response => {
            if (response.article) {
              this.article = response.article;
            } else {
              this._router.navigate(['/home']);
            }
          },
          error => {
            console.log(error);
          }
        )
      }
    )
  }

  delete(id) {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez borrado el articulo, no podras recuperarlo",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {

          this._articuloService.deleteArticle(id).subscribe(
            response => {
              if (response.status = "Success") {
                swal("El articulo se ha eliminado", {
                  icon: "success",
                });
                this._router.navigate(['/blog']);
              }
            },
            error => {
              swal("El articulo no se ha eliminado", {
              icon: "error",
            });
              this._router.navigate(['/blog']);
            }
          )
        } else {
          swal("El articulo no se ha eliminado");
        }
      });
  }

}
