import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificadorService } from '../services/autentificador.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilesGuard implements CanActivate {

  constructor(private autentificador:AutentificadorService, private router:Router) { }

  /*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.autentificador.logeado) { 
      console.log('Estoy logeado');
      return true;
    }
    console.log('No estoy logeado');     
    return false;
  }
  */

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.info('Route', route);
    console.info('State', state);
    console.info('Ruta', state.url); // obtengo ruta 

    if(this.autentificador.logeado) { 
      console.log('Estoy logeado');
    }
    else {
      console.log('No estoy logeado');
      this.router.navigate(['/errorLogin']);
    }
    return true;
  }

  verificarPerfil() {
    // return true or false; 
  }
  

}
