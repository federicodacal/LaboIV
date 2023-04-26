import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'parent', component:ParentComponent },
  { path:'child', component:ChildComponent },
  { path:'**', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
