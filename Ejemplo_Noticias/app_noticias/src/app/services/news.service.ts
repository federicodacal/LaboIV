import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNoticias(params:any):Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='+params.pais+'&category='+params.categoria+'&apiKey=27c8746ab5cc4780921a90467be4f91a';
    
    return this.http.get(URL);
  }
}
