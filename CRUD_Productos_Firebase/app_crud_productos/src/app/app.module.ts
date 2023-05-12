import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { AddComponent } from './components/add/add.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    TableComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
