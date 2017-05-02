import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Book} from "./book.model";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

const URL = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  constructor(private http: Http) { }

  getList():Observable<Book[]>{
    return this.http.get(URL).map(response => response.json());
  }

}
