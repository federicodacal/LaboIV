import { Component, OnInit ,Input} from '@angular/core';
import { Alumno } from '../../../clases/alumno';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  @Input() alumnoParaMostrar: Alumno;
  fotoActual: string;
  anchoDeFoto: string;

  constructor() {
    this.fotoActual = '/assets/imagenes/presentacion.jpg';
    this.anchoDeFoto = '100%';
   }

  ngOnInit() {
  }

  LipiarDetalle()
  {
    this.alumnoParaMostrar = null;
    // tslint:disable-next-line: no-console
    console.info('objeto', this.alumnoParaMostrar);
  }

}
