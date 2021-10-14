import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.css']
})
export class CrearVendedorComponent implements OnInit {

  nombre:string = "";
  username:string="";
  email:string="";
  password:string="";

  constructor(private servicio: UsuarioService) { 

  }
  
  ngOnInit(): void {
  } 

  crearVendedor(){
    let u:Usuario= {
      nombre:this.nombre,
      username:this.username,
      email:this.email,
      password:this.password,
      admin: false
    };
    console.log("entre al metodo");
    console.log(u);
    this.servicio.crearUsuario(u).subscribe();
    alert("Usuario creado: " + this.nombre + "🔥💀")
    window.location.reload();

  }

}
