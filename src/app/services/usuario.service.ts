import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../modelo/usuario';
import { producto } from '../modelo/producto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  obtenerUsuarios(){
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios");
  }
  obtenerUsuariosPorId( id:number ){
    return this.http.get<Usuario>("http://localhost:3000/usuarios/" + id);
  }
  obtenerUsuariosPorUsername(username:string){
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios" + username);
  }
  eliminarUsuario(usuario:Usuario){
    return this.http.delete("http://localhost:3000/usuarios/" + usuario.id);
  }
  crearUsuario(usuario:Usuario){
    return this.http.post("http://localhost:3000/usuarios", usuario);
  }
  editarUsuario(usuario:Usuario){
    return this.http.put("http://localhost:3000/usuarios/" + usuario.id, usuario); 
  }

  //login(username:string, password:string){
    //http://localhost:3000/usuarios?username=pancho&password=123
    //return this.http.get<Usuario[]>('http://localhost:3000/usuarios?username='+username+"&password="+password);
  //}

  login(username:string, password:string){
    return this.http.post<any>("http://localhost:3000/login", {username:username, password:password});
  }

  verificarUsuarioLogeado():boolean{
    let token = localStorage.getItem("token");
    if(token){
      return true;
    }else{
      return false;
    }
  }

}
