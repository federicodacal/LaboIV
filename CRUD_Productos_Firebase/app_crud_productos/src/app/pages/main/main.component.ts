import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy{

  listadoProductos:Array<Product>;
  productoSeleccionado:any={};
  vistaListado:string='Tabla';
  loading:boolean = false;
  suscripcion!:Subscription;

  constructor(private prodService:ProductService) { 
    this.listadoProductos = new Array();
  }

  ngOnInit() {
    this.loading = true;
    this.traerProductos();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  traerProductos() {
    this.suscripcion = this.prodService.traer().subscribe((res) => {
      console.info('Productos', res);
      this.listadoProductos = res as Array<Product>;
      this.loading = false;
    });
  }

  agregarProducto($event:Event) {
    console.info("Desde parent-component", $event);

    let prod = new Product();
    prod = $event as any as Product;

    this.prodService.agregar(prod);

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
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

    this.prodService.borrar(prod);

    Swal.fire({
      icon: 'success',
      title: 'Producto eliminado',
      showConfirmButton: false,
      timer: 2000
    });
  }

  modificarProducto($event:Event) {
    let prod = new Product();
    prod = $event as any as Product;

    console.info('Prod en modificar main', prod);

    this.prodService.modificar(prod);
    
    Swal.fire({
      icon: 'success',
      title: 'Producto actualizado',
      showConfirmButton: false,
      timer: 2000
    });
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
