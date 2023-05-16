import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app_paises';

  suscripcion!:Subscription;

  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.traer();
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  traer() {
    this.suscripcion = this.httpService.traer();
  }

}
