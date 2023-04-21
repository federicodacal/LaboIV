import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentPageComponent } from './inputOutput/pages/parent-page/parent-page.component';

const routes: Routes = [
  { path:'InputOutput', component:ParentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
