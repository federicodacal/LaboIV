import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  @Input() listadoPeliculas?: Pelicula[];
  @Output() eventSeleccionarPelicula:EventEmitter<any>;

  constructor() {
    this.eventSeleccionarPelicula = new EventEmitter<any>();
  }

  seleccionarPelicula(pelicula:any) {
    console.info('Desde tabla-pelicula', pelicula);
    this.eventSeleccionarPelicula.emit(pelicula);
  }

}
