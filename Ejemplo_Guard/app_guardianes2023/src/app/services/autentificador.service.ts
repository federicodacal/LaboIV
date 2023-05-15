import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificadorService {

  logeado:boolean = false;

  constructor() { }

  registrar() {

  }

  logear() {
    this.logeado = true;
  }

  deslogear() {

  }

}
