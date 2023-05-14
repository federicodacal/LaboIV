export class Tarjeta {

    id?:string;
    titular:string;
    numero:string;
    cvv:number;
    fechaExpiracion:string;
    fechaCreacion:Date;
    fechaActualizacion:Date;

    constructor(titular:string, numero:string, cvv:number, fechaExpiracion:string) {
        this.titular = titular;
        this.numero = numero;
        this.cvv = cvv;
        this.fechaExpiracion = fechaExpiracion;
        this.fechaCreacion = new Date();
        this.fechaActualizacion = new Date();
    }

}
