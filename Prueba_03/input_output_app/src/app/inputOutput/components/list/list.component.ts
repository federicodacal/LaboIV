import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() listadoRecibido?:any[];
  @Output() eventSeleccionarProducto:EventEmitter<any>;

  constructor() { 
    this.eventSeleccionarProducto = new EventEmitter<any>();
  }

  seleccionarProducto(producto:any) {

    console.info("Desde detalle component", producto);

    this.eventSeleccionarProducto.emit(producto);
  }
}
