import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ventas2 } from '../modelo/ventas2';

@Injectable({
  providedIn: 'root'
})
export class Ventas2Service {

  constructor(private http:HttpClient) { }
  
  realizarVenta(venta:Ventas2){
    return this.http.post("http://localhost:3000/ventas2/", venta);
  }
  obtenerVentas(){
    return this.http.get<Ventas2[]>("http://localhost:3000/ventas2");
  }
}
