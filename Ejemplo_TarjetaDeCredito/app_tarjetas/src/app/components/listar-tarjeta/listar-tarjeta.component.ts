import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tarjeta } from 'src/app/models/tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  listadoTarjetas:Tarjeta[] = [];

  constructor(private tarjetaService:TarjetaService, private toastr:ToastrService) { }

  ngOnInit() {
    this.listarTarjetas();
  }

  listarTarjetas() {
    this.tarjetaService.traerTarjetas().subscribe((res) => {
      console.info('tarjetas', res);

      this.listadoTarjetas = res as Array<Tarjeta>;
    });
  }

  eliminarTarjeta(id:any) {
    this.tarjetaService.borrarTarjeta(id)
      .then(() => {
        this.toastr.error('La tarjeta fue borrada', 'Registro eliminado', {timeOut:2000, positionClass: 'toast-top-center'});
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error('La tarjeta no pudo ser borrada', 'Error');
      })
  }

  editarTarjeta(tarjeta:Tarjeta) {
    this.tarjetaService.agregarTarjetaEdit(tarjeta);
  }

}

