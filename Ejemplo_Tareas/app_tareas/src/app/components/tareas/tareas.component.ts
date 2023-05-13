import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  listaTareas:Tarea[] = []
  descripcionTarea:string = '';

  constructor() { }

  agregarTarea() {
    const tarea : Tarea = {
      descripcion : this.descripcionTarea,
      estado : false
    }

    if(this.descripcionTarea == '') {
      alert('Campo vacío');
    }
    else {
      this.listaTareas.push(tarea);
    }

    this.descripcionTarea='';
  }

  eliminarTarea(index:number) {
    this.listaTareas.splice(index,1);
  }

  actualizarTarea(tarea:Tarea, index:number) {
    this.listaTareas[index].estado = !tarea.estado;
  }


}
