import { Injectable } from '@angular/core';
import { Firestore, doc, addDoc, collection, collectionData, getDoc, getDocs, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore:Firestore) { }

  traer() {
    const col = collection(this.firestore, 'Productos');
    return collectionData(col, {idField:'id'}) as Observable<Product[]>;
  }

  agregar(prod:Product) {
    const collectionRef = collection(this.firestore, 'Productos');
    return addDoc(collectionRef, {marca: prod.marca, precio: prod.precio, stock: prod.stock});
  }

  borrar(prod:Product) { 
    const collectionRef = collection(this.firestore, 'Productos');
    const documento = doc(collectionRef, prod.id);
    return deleteDoc(documento);
  }

  modificar(prod:Product) {
    const col = collection(this.firestore, 'Productos');

    const documento = doc(col, prod.id);
    updateDoc(documento, {
      marca: prod.marca,
      precio: prod.precio,
      stock: prod.stock
    });
    
  }
}
