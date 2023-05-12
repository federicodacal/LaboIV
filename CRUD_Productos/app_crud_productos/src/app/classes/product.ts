export class Product {

    marca:string | undefined;
    precio:number | undefined;
    stock:number | undefined;
    
    constructor(marca?:string, precio?:number, stock?:number) {
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }

}
