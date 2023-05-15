import { Component } from '@angular/core';
import { AutentificadorService } from 'src/app/services/autentificador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private autentificador:AutentificadorService) { }

  logear() {
    this.autentificador.logear();
  }

}
