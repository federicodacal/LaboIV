import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentPageComponent } from './inputOutput/pages/parent-page/parent-page.component';
import { AddComponent } from './inputOutput/components/add/add.component';
import { DetailComponent } from './inputOutput/components/detail/detail.component';
import { ListComponent } from './inputOutput/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentPageComponent,
    AddComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
