import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';
import { BackofficeComponent } from './pages/backoffice/backoffice.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ErrorComponent } from './pages/error/error.component';
import { PerfilesGuard } from './guard/perfiles.guard';

const routes: Routes = [
  { path: '', component:BienvenidaComponent },
  { path: 'login', component:LoginComponent },
  { path: 'backoffice', component:BackofficeComponent, canActivate: [PerfilesGuard] },
  { path: 'registro', component:RegistroComponent },
  { path: 'errorLogin', component:ErrorComponent },
  { path: '**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
