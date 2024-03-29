import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lista } from 'src/app/modelo/lista';
import { Stock } from 'src/app/modelo/stock';
import { ServicioStockService } from 'src/app/servicios/servicio-stock.service';
import { StocksService } from 'src/app/servicios/stocks.service';
import { ExcelService } from 'src/app/servicios/excel.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public page:number=0;
  
  stockForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
  })

  constructor(private miServicio: ServicioStockService, private stocksservice: StocksService,private excelService: ExcelService) {
    this.stocks = this.stocksservice.stocks
  }

  ngOnInit(): void {
    this.stocksservice.obtenerStock().subscribe(misStocks => {
      console.log(misStocks);
      this.stocks = Object.values(misStocks);
      this.stocksservice.setStocks(this.stocks);
    });
  }

  stocks: Stock[] = [];
  lista: Lista[] = 
  [
    { "cod": 1, "nombre": "C.S TORIBIA CASTRO" },
    { "cod": 2, "nombre": "C.S SAN MARTIN" },
    { "cod": 3, "nombre": "C.S MORROPE" },
    { "cod": 4, "nombre": "P.S EL ROMERO" },
    { "cod": 5, "nombre": "C.S CRUZ DEL MEDANO" },
    { "cod": 6, "nombre": "P.S LA COLORADA" },
    { "cod": 7, "nombre": "C.S MOCHUMI" },
    { "cod": 8, "nombre": "C.S TUCUME" },
    { "cod": 9, "nombre": "C.S JAYANCA" },
    { "cod": 10, "nombre": "C.S MOTUPE" },
    { "cod": 11, "nombre": "C.S OLMOS" },
    { "cod": 12, "nombre": "C.S SALAS" },
    { "cod": 13, "nombre": "P.S LA RAMADA" },
    { "cod": 14, "nombre": "C.S KAÑARIS" },
    { "cod": 15, "nombre": "C.S PACORA" },
    { "cod": 16, "nombre": "C.S.M.C TUMI DE ORO" },
    { "cod": 17, "nombre": "C.S ILLIMO" },
    { "cod": 18, "nombre": "Red Lambayeque" }
  ];

  agregarStock(): void {
    let mistock = new Stock(this.cuadroPunto, this.cuadroNombre, this.cuadroApellidopat, this.cuadroApellidomat, this.cuadroFecha, this.cuadroFuas, this.cuadroHis, this.cuadroObservacion);
    this.miServicio.muestraMensaje(mistock.nombre + " tu registro se agrego con éxito");
    this.stocksservice.agregarStockServicio(mistock);
  }

  nextPage(){
    this.page+=5;
  }

  prevPage(){
    if(this.page>0)
    this.page-=5;
  }

  exportData() {
    this.excelService.exportToExcel(this.stocks, 'Detalle_Stock_Pend', 'Hoja1');
  }
  cuadroPunto: string = "";
  cuadroNombre: string = "";
  cuadroApellidopat: string = "";
  cuadroApellidomat: string = "";
  cuadroFecha: Date = new Date();
  cuadroFuas: number = 0;
  cuadroHis: number = 0;
  cuadroObservacion: number = 0;

}
