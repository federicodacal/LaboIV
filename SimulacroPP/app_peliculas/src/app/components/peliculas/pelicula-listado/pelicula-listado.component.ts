import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {

  @Input() listadoPeliculas?: Pelicula[];
  @Output() eventSeleccionarPelicula:EventEmitter<any>;

  constructor() {
    this.eventSeleccionarPelicula = new EventEmitter<any>();
  }

  seleccionarPelicula(pelicula:any) {
    console.info('Desde listado-pelicula', pelicula);
    this.eventSeleccionarPelicula.emit(pelicula);
  }
}
