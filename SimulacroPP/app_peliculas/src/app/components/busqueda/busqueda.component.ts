import { Component } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';
import { TipoPelicula } from 'src/app/classes/tipoPelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  listadoPeliculas:Pelicula[];
  peliculaSeleccionada?:Pelicula;
  tipoVista:string;

  constructor() {
    this.listadoPeliculas = [
      { id: 1, nombre:"Señor de los Anillos I", tipo: TipoPelicula.Otros, fechaDeEstreno: new Date(), cantidadDePublico: 100, foto: '../../assets/img/peliculas/1.jpg' },
      { id: 2, nombre:"Señor de los Anillos II", tipo: TipoPelicula.Otros, fechaDeEstreno: new Date(), cantidadDePublico: 200, foto: '../../assets/img/peliculas/2.jpg' },
      { id: 3, nombre:"Señor de los Anillos III", tipo: TipoPelicula.Otros, fechaDeEstreno: new Date(), cantidadDePublico: 300, foto: '../../assets/img/peliculas/3.jpg' },
    ];

    this.tipoVista = 'Tabla';

  }

  cambiarVista() {
    if(this.tipoVista == 'Tabla')
    {
      this.tipoVista = 'Listado';
    }
    else 
    {
      this.tipoVista = 'Tabla';
    }
  }

  detallarPeliculaSeleccionada($event:any) {
    console.info('Desde busqueda:', $event);
    this.peliculaSeleccionada = $event;
  }

  LimpiarDetalle():void {
    this.peliculaSeleccionada = undefined;
  }

}
