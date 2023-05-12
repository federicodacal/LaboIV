import { Component } from '@angular/core';
import { Product } from 'src/app/classes/product';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  listadoProductos:Array<Product>;

  productoSeleccionado:any={};

  vistaListado:string='Tabla';

  constructor(private prodService:ProductService) { 
    this.listadoProductos = new Array();
  }

  ngOnInit() {
    this.traerProductos();
  }

  traerProductos() {
    this.prodService.traer().subscribe((res) => {
      console.info('Productos', res);
      this.listadoProductos = res as Array<Product>;
    });
  }

  agregarProducto($event:Event) {
    console.info("Desde parent-component", $event);

    let prod = new Product();
    prod = $event as any as Product;

    this.prodService.agregar(prod);

    Swal.fire({
      icon: 'success',
      title: 'Producto Agregado',
      showConfirmButton: false,
      timer: 2000
    });
  }
  
  detallarProductoSeleccionado($event:Event) {
    this.productoSeleccionado = $event;
  }

  borrarProducto($event:Event) {
    let prod = new Product();
    prod = $event as any as Product;

    this.listadoProductos.forEach(p => {
      if(p.marca == prod.marca) {
        if(p.id != null) {
          prod.id = p.id;
        }
      }
    });

    this.prodService.borrar(prod);
  }

  modificarProducto($event:Event) {
    let prod = new Product();
    prod = $event as any as Product;

    this.listadoProductos.forEach(p => {
      if(p.marca == prod.marca) {
        if(p.id != null) {
          prod.id = p.id;
        }
      }
    });

    this.prodService.modificar(prod);
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
