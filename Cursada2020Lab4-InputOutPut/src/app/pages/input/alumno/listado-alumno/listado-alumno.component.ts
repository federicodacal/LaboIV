import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Alumno } from '../../../../clases/alumno';
@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})
export class ListadoAlumnoComponent implements OnInit {
  @Input() listadoAlumnos: Alumno[] ;
  @Output() alumnoSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  mostrarDetalles(unAlumno: Alumno) {
    // tslint:disable-next-line: no-console
    console.info( ' mostrar detalles ', unAlumno);
    this.alumnoSeleccionado.emit(unAlumno);
  }

}
