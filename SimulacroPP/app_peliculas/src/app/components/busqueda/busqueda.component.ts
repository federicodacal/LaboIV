import { Component } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';
import { TipoPelicula } from 'src/app/classes/tipoPelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  listadoPeliculas : Pelicula[];

  constructor() {
    this.listadoPeliculas = [
      { id: 1, nombre:"Señor de los Anillos I", tipo: TipoPelicula.Otros, fechaDeEstreno: new Date(), cantidadDePublico: 100, foto:'' },
      { id: 2, nombre:"Señor de los Anillos II", tipo: TipoPelicula.Otros, fechaDeEstreno: new Date(), cantidadDePublico: 200, foto:'' },
      { id: 3, nombre:"Señor de los Anillos III", tipo: TipoPelicula.Otros, fechaDeEstreno: new Date(), cantidadDePublico: 300, foto:'' },
    ];
  }

}
