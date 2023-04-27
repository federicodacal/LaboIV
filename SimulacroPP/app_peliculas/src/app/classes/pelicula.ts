import { TipoPelicula } from "./tipoPelicula";

export class Pelicula {
    
    public id:number;
    public nombre:string;
    public tipo:TipoPelicula;
    public fechaDeEstreno:Date;
    public cantidadDePublico:number;
    public foto:string;

    constructor(id:number, nombre:string, tipo:TipoPelicula, fechaDeEstreno:Date, cantidadDePublico:number, foto:string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.foto = foto;
    }

}