import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/classes/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() productoRecibido:any={};

  @Output() eventBorramosProducto:EventEmitter<any> = new EventEmitter<any>();
  @Output() eventModificamosProducto:EventEmitter<any> = new EventEmitter<any>();

  marca?:string;
  precio?:number;
  stock?:number;
  id?:string;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes:SimpleChanges) {
    console.info('Entré a ngOnChanges de detail:', changes);
    this.marca = changes['productoRecibido'].currentValue.marca;
    this.precio = changes['productoRecibido'].currentValue.precio;
    this.stock = changes['productoRecibido'].currentValue.stock;
    this.id = changes['productoRecibido'].currentValue.id;
  }

  borrarProducto():void {

    if(this.validarInputs()) {
      let prod = new Product();
      prod.marca = this.productoRecibido.marca;
      prod.precio = this.productoRecibido.precio;
      prod.stock = this.productoRecibido.stock;
      prod.id = this.productoRecibido.id;
  
      console.info("Producto Baja", prod);
      this.eventBorramosProducto.emit(prod);
  
      this.restablecerCampos();
    }
  }

  modificarProducto() {

    if(this.validarInputs()) {
      let prod = new Product();
      prod.marca = this.marca;
      prod.precio = this.precio;
      prod.stock = this.stock;
      prod.id = this.id;
  
      console.info("Producto Modificar", prod);
      this.eventModificamosProducto.emit(prod);
  
      this.restablecerCampos();
    }
  }

  restablecerCampos() {
    this.marca = '';
    this.precio = undefined;
    this.stock = undefined;
  }

  validarInputs() {
    if(this.marca == '' || this.precio == undefined || this.stock == undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campos incompletos',
      });
      return false;
    }
    return true;
  }
}
