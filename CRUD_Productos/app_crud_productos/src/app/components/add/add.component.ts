import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/classes/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output() eventCreamosProducto:EventEmitter<any> = new EventEmitter<any>();

  marca?:string;
  precio?:number;
  stock?:number;

  constructor() { }

  guardarProducto():void {
    if(this.marca == null || this.precio == null || this.stock == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campos incompletos',
      });
    }
    else { 
      let prod = new Product(this.marca, this.precio, this.stock);
      console.info("Producto Alta", prod);
      this.eventCreamosProducto.emit(prod);
    }
  }



}
