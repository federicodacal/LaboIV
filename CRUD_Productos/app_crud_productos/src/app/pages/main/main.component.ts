import { Component } from '@angular/core';
import { Product } from 'src/app/classes/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  listadoProductos:Array<Product>;

  productoSeleccionado:any={};

  vistaListado:string='Tabla';

  constructor() {
    this.listadoProductos = new Array();
    this.listadoProductos = [new Product('Coca-Cola', 300, 400), new Product('Fanta', 250, 300), new Product('Pepsi', 200, 500), new Product('Sprite', 250, 50)]
  }

  ngOnInit() {
    if(localStorage.getItem('productos') == null) {  
      localStorage.setItem('productos', JSON.stringify(this.listadoProductos));
    }
    else {
      let prod_json:string | null = localStorage.getItem('productos');
      if(prod_json != null) {
        this.listadoProductos = JSON.parse(prod_json);
      }
    }
  }

  agregarProducto($event:Event) { 
    console.info("Desde parent-component", $event);
    let len = this.listadoProductos.length;
    this.listadoProductos.push($event as any as Product);
    localStorage.setItem('productos', JSON.stringify(this.listadoProductos));
    if(this.listadoProductos.length > len) {
      Swal.fire({
        icon: 'success',
        title: 'Producto Agregado',
        showConfirmButton: false,
        timer: 2000
      });
    }
  }
  
  detallarProductoSeleccionado($event:Event) {
    this.productoSeleccionado = $event;
  }

  borrarProducto($event:Event) {
    if(this.listadoProductos != null) {
      this.productoSeleccionado = $event;
      this.listadoProductos.splice(this.listadoProductos.findIndex(p => p.marca === this.productoSeleccionado.marca), 1);
      
      localStorage.setItem('productos', JSON.stringify(this.listadoProductos));
    }
    console.log(JSON.stringify(this.listadoProductos));
  }

  modificarProducto($event:Event) { 
    if(this.listadoProductos != null) {
      this.productoSeleccionado = $event;
      
      let index = this.listadoProductos.findIndex(p => p.marca === this.productoSeleccionado.marca);

      if(index > -1) {
        this.listadoProductos[index] = this.productoSeleccionado;
        localStorage.setItem('productos', JSON.stringify(this.listadoProductos));
      }
      console.log(JSON.stringify(this.listadoProductos));
    }
  }

  cambiarVista():void {
    if(this.vistaListado == 'Tabla') {
      this.vistaListado = 'Lista';
    }
    else {
      this.vistaListado = 'Tabla';
    }
  }

}
