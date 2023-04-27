import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  @Input() listadoPeliculas?: Pelicula[];

  constructor() {

  }

}
