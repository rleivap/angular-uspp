import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioStockService {

  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje)
  }

}
