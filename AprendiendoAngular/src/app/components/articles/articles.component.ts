import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Articulo[];
  public url: string;
  constructor() { 
    this.url = Global.url;
  }

  ngOnInit() {
  }

}
