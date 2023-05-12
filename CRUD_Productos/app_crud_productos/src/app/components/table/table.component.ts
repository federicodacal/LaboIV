import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() listadoRecibido?:any[];
  @Output() eventSeleccionarProducto:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  seleccionarProducto(producto:any) {
    console.info('Desde detalle component', producto);
    this.eventSeleccionarProducto.emit(producto);
  }

}
