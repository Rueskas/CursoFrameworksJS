import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Articulo } from '../models/articulo';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class ArticuloService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url=Global.url;
    }

    getArticles(last: any = null):Observable<any>{
        var articles = "articles";
        if(last != null){
            articles += "/true";
        }
        return this._http.get(this.url+articles);
    }

    getArticle(id: string):Observable<any>{
        var articles = "article/"+id;
        return this._http.get(this.url+articles);
    }
}
