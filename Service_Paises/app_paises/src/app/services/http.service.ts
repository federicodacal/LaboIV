import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  traer() {
    //this.http.get<Pais[]>
    const req = this.http.get<any>('https://restcountries.com/v3.1/all');

    const subs = req.subscribe(res => {
      console.log(res);
    });

    return subs;
  }
}
