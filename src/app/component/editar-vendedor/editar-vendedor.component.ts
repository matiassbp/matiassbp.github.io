import { Component, OnInit,Input } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.css']
})
export class EditarVendedorComponent implements OnInit {

  @Input() usuarioselected: Usuario;
  
  nombre:string = "";
  username:string="";
  email:string="";
  password:string="";

  constructor(private servicio: UsuarioService) {
    this.usuarioselected = {id: 0, nombre: "", username: "", email: "", password:"", admin:false};
    this.actualizarDatos();
   }

  ngOnInit(): void {
  }

  actualizarDatos(){
    if(this.nombre === ""){
      this.usuarioselected.nombre = this.usuarioselected.nombre
    }else{
      this.usuarioselected.nombre = this.nombre;
    }

    if(this.email === ""){
      this.usuarioselected.email = this.usuarioselected.email;
    }
    else{
      this.usuarioselected.email = this.email;
    }

    if(this.password === ""){
      this.usuarioselected.password = this.usuarioselected.password;
    }
    else{
      this.usuarioselected.password = this.password;
    }

    if(this.username === ""){
      this.usuarioselected.username = this.usuarioselected.username;
    }
    else{
      this.usuarioselected.username = this.username;
    }

  }

  editarUsuario(){
    this.actualizarDatos();
    this.servicio.editarUsuario(this.usuarioselected).subscribe( usuario =>{
      alert("usuario editado: " + this.usuarioselected.username);
    });
  }

}
