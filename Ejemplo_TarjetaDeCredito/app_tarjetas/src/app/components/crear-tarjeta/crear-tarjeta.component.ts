import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarjeta } from 'src/app/models/tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit{

  forms:FormGroup;
  loading:boolean = false;
  titulo:string = 'CREAR TARJETA';
  idTarjeta : string | undefined;

  constructor(private fb:FormBuilder, private tarjetaService:TarjetaService, private toastr:ToastrService) { 
    this.forms = this.fb.group({
      titular: ['', Validators.required],
      nroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }

  ngOnInit() { 
    this.tarjetaService.getTarjeta().subscribe(res => {
      this.titulo = 'EDITAR TARJETA';
      this.idTarjeta = res.id;
      this.forms.patchValue({
        titular: res.titular,
        nroTarjeta: res.numero,
        cvv: res.cvv,
        fechaExpiracion: res.fechaExpiracion
      });
      console.info('Tarjeta de getTarjeta:', res);
    });
  }

  crearTarjeta() {
    console.info('Form', this.forms);

    const TARJETA:Tarjeta = {
      titular: this.forms.value.titular,
      numero: this.forms.value.nroTarjeta,
      fechaExpiracion: this.forms.value.fechaExpiracion,
      cvv: this.forms.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }

    console.info('Tarjeta', TARJETA);

    this.loading = true;

    this.tarjetaService.guardarTarjeta(TARJETA)
      .then(() => {
        this.loading = false;
        console.log('Tarjeta registrada');
        this.toastr.success('La tarjeta fue guardada con éxito', 'Tarjeta registrada', {timeOut:2000, positionClass: 'toast-top-center'});
        this.forms.reset();
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
        this.toastr.error('Ocurrió un problema. No se pudo registrar la tarjeta', 'Error');
      });
  }

  editarTarjeta(id:string) {

    const TARJETA:any = {
      titular: this.forms.value.titular,
      numero: this.forms.value.nroTarjeta,
      fechaExpiracion: this.forms.value.fechaExpiracion,
      cvv: this.forms.value.cvv,
      fechaActualizacion: new Date()
    }

    this.loading = true;
    
    this.tarjetaService.modificarTarjeta(id, TARJETA)
      .then(() => {
        this.loading = false;
        console.log('Tarjeta actualizada');
        this.toastr.success('La tarjeta fue editada con éxito', 'Tarjeta actualizada', {timeOut:2000, positionClass: 'toast-top-center'});
        this.forms.reset();
        this.titulo = 'AGREGAR TARJETA';
        this.idTarjeta = undefined;
      });
  }

  guardarTarjeta() {
    if(this.idTarjeta === undefined) {
      this.crearTarjeta();
    }
    else {
      this.editarTarjeta(this.idTarjeta);
    }
  }

}
