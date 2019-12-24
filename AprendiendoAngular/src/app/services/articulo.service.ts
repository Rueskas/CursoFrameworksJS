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

    search(search: string) : Observable<any> {
        return this._http.get(this.url + "search/"+search);
    }

    postArticle(article) : Observable<any> {
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log(params);
        return this._http.post(this.url+'save', params, {headers: headers});
    }
}
