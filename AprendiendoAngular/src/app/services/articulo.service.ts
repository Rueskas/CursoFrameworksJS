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

    getArticle():Observable<any>{
        console.log(this.url+"articles");
        return this._http.get(this.url+"articles");
    }
}
