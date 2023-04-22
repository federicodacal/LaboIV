import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css']
})
export class ParentPageComponent {

  listadoProductos:any[];

  productoSeleccionado:any={};

  constructor() { 

    this.listadoProductos = [
      {precio: 45, marca: "Fanta", stock: 20 },
      {precio: 30, marca: "Pepsi", stock: 25 },
      {precio: 35, marca: "Coca-Cola", stock: 40 }
    ];
  }

  agregarProducto($event:Event){ 

    console.info("Desde parent-component", $event)

    this.listadoProductos.push($event);
  }
  
  detallarProductoSeleccionado($event:Event) {

    this.productoSeleccionado = $event;
  }
}
