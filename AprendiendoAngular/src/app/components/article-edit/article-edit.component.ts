import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticuloService]
})
export class ArticleEditComponent implements OnInit {
  public url : string;
  public article: Articulo;
  public status: string;
  public pageTitle: string;
  public isEdit: Boolean;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.jpeg,.gif",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-image/'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para tu articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _articleService: ArticuloService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.article = new Articulo('', '', '', null, null);
    this.isEdit = true;
    this.pageTitle = "Editar articulo";
    this.url = Global.url;
  }

  ngOnInit() {
    this.getArticle();
  }


  onSubmit() {
    this._articleService.putArticle(this.article._id, this.article).subscribe(
      response => {
        if (response.status == "Success") {
          this.status = response.status;
          this.article = response.article;
          this._router.navigate(["/blog/article",this.article._id]);
        } else {
          this.status = response.status;
        }
      },
      error => {
        this.status = error.status;
      }
    )
  }

  getArticle() {
    this._route.params.subscribe(
      params => {
        let id = params['id'];

        this._articleService.getArticle(id).subscribe(
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

  imageUpload(data) {
    let imageData = JSON.parse(data.response);
    this.article.image = imageData.imageName;
  }

}
