import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output() eventCreamosProducto:EventEmitter<any>;

  marca?:string;
  precio?:number;
  stock?:number;

  constructor() {
    this.eventCreamosProducto = new EventEmitter<any>();
  }

  guardarProducto():void {

    let producto:any = {};

    // Validar! antes de asignar.

    producto.marca = this.marca;
    producto.precio = this.precio;
    producto.stock = this.stock;

    console.info("Producto Alta", producto);

    // Disparo evento
    this.eventCreamosProducto.emit(producto); 
  }

}
