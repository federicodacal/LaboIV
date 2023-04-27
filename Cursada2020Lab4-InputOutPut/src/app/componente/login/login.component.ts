import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario
  constructor(private rutas:Router) { }

  ngOnInit() {
  }
 
  
  Ingresar() {
    console.log(this.usuario);
  }
}
