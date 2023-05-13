import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada:string = 'general';
  paisSeleccionado:string = 'ar'

  categorias:any[] = [
    {value: 'general', nombre:'General'},
    {value: 'business', nombre:'Negocios'},
    {value: 'entertainment', nombre:'Entretenimiento'},
    {value: 'health', nombre:'Salud'},
    {value: 'science', nombre:'Ciencia'},
    {value: 'sports', nombre:'Deportes'},
    {value: 'technology', nombre:'Tecnologia'}
  ];

  paises:any[] = [
    {value: 'ar', nombre:'Argentina'},
    {value: 'br', nombre:'Brasil'},
    {value: 'es', nombre:'España'},
    {value: 'gb', nombre:'Reino Unido'},
    {value: 'fr', nombre:'Francia'},
    {value: 'mx', nombre:'Mexico'}
  ];

  constructor() {

  }

  buscarNoticia() {
    console.log(this.categoriaSeleccionada + ' ' + this.paisSeleccionado);
    const PARAMS = {categoria: this.categoriaSeleccionada, pais: this.paisSeleccionado};
    this.parametrosSeleccionados.emit(PARAMS);
  }

}
