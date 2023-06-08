export class Stock {
    
    constructor(punto:string, nombre:string, apellidopat:string, apellidomat:string,
        fecha:Date, stock:number){
            this.punto=punto;
            this.nombre=nombre;
            this.apellidopat=apellidopat;
            this.apellidomat=apellidomat;
            this.fecha=fecha;
            this.stock=stock;
        }
    punto:string="";
    nombre:string="";
    apellidopat:string="";
    apellidomat:string="";
    fecha:Date=new Date(Date.now());
    stock:number=0;
}
