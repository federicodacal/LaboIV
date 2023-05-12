import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input() productoRecibido:any={};
  @Input() listadoRecibido?:any[];

  @Output() eventBorramosProducto:EventEmitter<any> = new EventEmitter<any>();
  @Output() eventModificamosProducto:EventEmitter<any> = new EventEmitter<any>();

  marca?:string;
  precio?:number;
  stock?:number;

  constructor() { }

  ngOnInit() { }

  borrarProducto():void {
    let prod = new Product();
    prod.marca = this.productoRecibido.marca;
    prod.precio = this.productoRecibido.precio;
    prod.stock = this.productoRecibido.stock;
    console.info("Producto Baja", prod);
    this.eventBorramosProducto.emit(prod);
  }

  modificarProducto() {
    let prod = new Product();
    prod.marca = this.marca;
    prod.precio = this.precio;
    prod.stock = this.stock;

    if(this.marca == null) {
      prod.marca = this.productoRecibido.marca;
    }
    if(this.precio == null) {
      prod.precio = this.productoRecibido.precio;
    }
    if(this.stock == null) {
      prod.stock = this.productoRecibido.stock;
    }

    console.info("Producto Modificar", prod);
    this.eventModificamosProducto.emit(prod);
  }


}
