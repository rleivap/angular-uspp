import { Component, OnInit } from '@angular/core';
/* import { listado } from 'src/app/modelo/listado'; */
import { Stock } from 'src/app/modelo/stock';
import { ServicioStockService } from 'src/app/servicios/servicio-stock.service';
import { StocksService } from 'src/app/servicios/stocks.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{

  constructor(private miServicio: ServicioStockService,private stocksservice:StocksService){
    this.stocks=this.stocksservice.stocks
  }
  ngOnInit(): void {
    this.stocksservice.obtenerStock().subscribe(misStocks=>{
      console.log(misStocks);
      this.stocks=Object.values(misStocks);
      this.stocksservice.setStocks(this.stocks);
    });
  }

  stocks:Stock[]=[];
/*   listapuntos:listado[]=[
                        {id:1,"C.S San Mrtin"},
                        {id:2,"C.S Toribia Castro"},
                        {id:3,"C.S Motupe"},
                        {id:4,"C.S Olmos"},
                        {id:5,"C.S Salas"},
                        {id:6,"C.S Illimo"},
                        {id:7,"C.S Mochumi"},
                        {id:8,"C.S Pacora"},
                        {id:9,"C.S Kañaris"},
                        {id:"10","C.S Morrope"},
                        {id:"11","C.S Cruz del Medano"},
                        {id:"12","C.S Tucume"},
                        {id:"13","C.S Jayanca"},
                        {id:"14","P.S Romwero"},
                        {id:"15","P.S La Colorada"},
                        {id:"16","P.S La Ramada"},
                        {id:"17","C.S.M.C Tumi de Oro"},
                        {id:"18","Red Lambayeque"}
  ]; */

  agregarStock(){
    let mistock=new Stock(this.cuadroPunto,this.cuadroNombre,this.cuadroApellidopat,this.cuadroApellidomat,this.cuadroFecha,this.cuadroFuas);
    this.miServicio.muestraMensaje(mistock.nombre + " tu registro se agrego con éxito");
    this.stocksservice.agregarStockServicio(mistock);
  }
  
  cuadroPunto:string="";
  cuadroNombre:string="";
  cuadroApellidopat:string="";
  cuadroApellidomat:string="";
  cuadroFecha:Date=new Date(Date.now());
  cuadroFuas:number=0;
}
