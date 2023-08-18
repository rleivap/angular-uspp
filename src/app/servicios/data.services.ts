import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../modelo/stock';

@Injectable({
  providedIn: 'root'
})
export class DataServices {

  constructor(private httpClient:HttpClient) { }

  cargarStock(){
    return this.httpClient.get('https://angular-uspp-default-rtdb.firebaseio.com/datos.json');
  }

  guardarStock(stocks:Stock[]){
    this.httpClient.put('https://angular-uspp-default-rtdb.firebaseio.com/datos.json',stocks).subscribe(
      response=>console.log("Se han guardado los registros correctamente"+ response),
      error=>console.log("No se han guardado los registros correctamente" + error)
    )
  }

}


