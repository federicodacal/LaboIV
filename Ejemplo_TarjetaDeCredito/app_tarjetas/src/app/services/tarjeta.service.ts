import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Tarjeta } from '../models/tarjeta';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private tarjeta$ = new Subject<any>();

  constructor(private firestore:Firestore) { }

  guardarTarjeta(tarjeta:Tarjeta) {
    const collectionRef = collection(this.firestore, 'tarjetas');
    return addDoc(collectionRef, tarjeta);
  }

  traerTarjetas() {
    const collectionRef = collection(this.firestore, 'tarjetas');
    return collectionData(collectionRef, {idField:'id'}) as Observable<Tarjeta[]>;
  }

  borrarTarjeta(id:string) { 
    const collectionRef = collection(this.firestore, 'tarjetas');
    const documento = doc(collectionRef, id);
    return deleteDoc(documento);
  }

  agregarTarjetaEdit(tarjeta:Tarjeta) {
    this.tarjeta$.next(tarjeta);
  }

  getTarjeta() {
    return this.tarjeta$.asObservable();
  }

  modificarTarjeta(id:string, tarjeta:Tarjeta) {
    const collectionRef = collection(this.firestore, 'tarjetas');

    const documento = doc(collectionRef, id);

    return updateDoc(documento, {
      numero: tarjeta.numero,
      titular: tarjeta.titular,
      cvv: tarjeta.cvv,
      fechaExpiracion: tarjeta.fechaExpiracion,
      //fechaCreacion: tarjeta.fechaCreacion,
      fechaActualizacion: tarjeta.fechaActualizacion
    });
  }


}
