import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../clases/alumno';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'Ejemplo  @Input()  @Output()  ';
  listadoPrincipal: Alumno[] ;
  alumnoSeleccionado: Alumno;
  entidad: string;
  estado: any;
  anchoGif: number;
  rutaDeGif: string;
  comoVer: string;
  claseDeBoton: string;

  constructor() {
    this.anchoGif = 50;
    this.estado = 'cargado';
    this.entidad = 'alumno';
    this.comoVer = 'Tabla';
    this.claseDeBoton = 'btn-danger';
    this.rutaDeGif = '/assets/imagenes/ajax-loader.gif';
    // this.profesorParaMostrar= new Profesor("Clementina","Programacion",777);
    this.listadoPrincipal = [
      { apellido: 'Aguas' , nombre: 'rogelio', legajo: 666 },
      { apellido: 'Mercurio' , nombre: 'Alfredo', legajo: 333 }
    ];

    /*this.ListadoProfesoresPrincipal= [
      { apellido: "Alvarez" ,materia:"matematicas",legajo: 666 },
      { apellido: "Villagran" ,materia:"prog 1",legajo: 333 }
    ];*/
  }

  ngOnInit() {
  }

  tomarAlumnoCreado(NuevoAlumno: Alumno) {
    this.listadoPrincipal.push(NuevoAlumno);
  }

  tomarAlumnoParaDetalles(NuevoAlumno: Alumno) {
    // tslint:disable-next-line: no-console
    console.info('profesor', NuevoAlumno);
    this.estado = 'cargando';
    setTimeout(() => {
      this.alumnoSeleccionado = NuevoAlumno;
      this.estado = 'cargado';
    }, 1000);
  }

  CambiarLaVista() {
    // tslint:disable-next-line: triple-equals
    if (this.comoVer == 'Tabla') {
       this.comoVer = 'Listado';
       this.claseDeBoton = 'btn-info';
    } else {
       this.comoVer = 'Tabla';
       this.claseDeBoton = 'btn-danger';
    }
  }

  CambiarEntidad(entidad: string) {
    this.entidad = entidad;
  }
  
  /*
  tomarProfesorParaDetalles(NuevoProfe: Profesor)
  {
    this.profesorParaMostrar=NuevoProfe;   
  }
  mostrarProfesor(parametroProfesor:Profesor)
  {
      console.info("profesor",parametroProfesor);
      //this.profesorParaMostrar=parametroProfesor;
      this.ListadoProfesoresPrincipal.push(parametroProfesor);
  }*/
}
