import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  valor:string='';

  // Con el Input creamos una variable que podremos asignar desde el padre.
  // En el Input se le puede mapear un nombre de forma que dentro del hijo tenga un nombre
  // pero desde el padre se utiliza con otro nombre
  // @Input('nombreUsadoEnPadre') nombreUsadoEnHijo;
  @Input() valorPasadoPorPadre:any='';

  // Con el Output declaramos un evento que se podra controlar en el padre.
  // Ojo solo lo declaramos (damos nombre y tipo) pero aqui no se emite nada
  // Se puede mapear un nombre de forma que dentro del hijo tenga un nombre
  // pero desde el padre se utiliza con otro nombre
  // @Output('nombreEnventoParaPadre') nombreEnventoParaHijo = new EventEmitter<any>();
  @Output() eventCambio = new EventEmitter<string>();

  constructor() { }

  // En esta funcion emitimos el evento. Cada vez que pase por aquí emitirá un evento.
  controlClick() {
    console.info('Emitiendo', this.valor);
    this.eventCambio.emit(this.valor);
  }
}
