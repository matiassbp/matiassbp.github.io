import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { producto } from '../modelo/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) {}

  obtenerProductos(){
    return this.http.get<producto[]>("http://localhost:3000/productos");
  }
  
  crearProductos(producto: producto){

    return this.http.post("http://localhost:3000/productos", producto);
  }

  eliminarProducto(producto: producto){
    return this.http.delete("http://localhost:3000/productos/" + producto.id);
  }
  editarProducto(producto: producto){
    return this.http.put("http://localhost:3000/productos/" + producto.id, producto); 

  }
}
