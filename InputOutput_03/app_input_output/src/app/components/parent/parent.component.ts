import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  // Variable que se asociara en el HTML al input del Hijo.
  valorPasarAlHijo:string='';

  // Variable que recoge el valor emitido por el Hijo.
  valorHijo:string='';

  constructor() { }

  // Controlamos el evento generado por el Hijo donde se envian los datos.
  controlarCambioHijo($event:any) {
    console.info('Datos en Padre:', $event);
    this.valorHijo = $event;
  }

}
