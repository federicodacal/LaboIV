import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() listadoRecibido?:any[];
  @Output() eventSeleccionarProducto:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  seleccionarProducto(producto:any) {
    console.info('Desde detalle component', producto);
    this.eventSeleccionarProducto.emit(producto);
  }

}
