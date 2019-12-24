import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticuloService]
})
export class ArticleNewComponent implements OnInit {
  public article: Articulo;
  public status: string;

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
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.article);
    this._articleService.postArticle(this.article).subscribe(
      response => {
        if (response.status == "Success") {
          this.status = response.status;
          this.article = response.article;
          this._router.navigate(["/blog"]);
        } else {
          this.status = response.status;
        }
      },
      error => {
        this.status = error.status;
      }
    )
  }

  imageUpload(data){
    let imageData = JSON.parse(data.response);
    this.article.image = imageData.imageName;
  }

}
