import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componente/bienvenida/bienvenida.component';
import { LoginComponent } from './componente/login/login.component';
import { ErrorComponent } from './componente/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './pages/input/admin/admin.component';
import { TablaAlumnoComponent } from './pages/input/tabla-alumno/tabla-alumno.component';
import { DetalleAlumnoComponent } from './pages/input/detalle-alumno/detalle-alumno.component';
import { FormAlumnoComponent } from './pages/input/form-alumno/form-alumno.component';

const routes: Routes = [
  {path: '', component: BienvenidaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
