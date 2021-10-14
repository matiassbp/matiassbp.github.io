import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  id: string|null = '';
  usuario: Usuario|null = null;

  nombre:string = "";
  username:string="";
  email:string="";
  password:string="";

  constructor(private router: Router, private route: ActivatedRoute, private servicio: UsuarioService) {

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.cargarUsuario();

  }

  actualizarNombre(){
    
    if(this.usuario){
      this.usuario.nombre = this.nombre;
      this.editarUsuario();
    }
  }

  actualizarEmail(){
    
    if(this.usuario){
      this.usuario.email = this.email;
      this.editarUsuario();
    }
  }

  actualizarUsername(){
    
    if(this.usuario){
      this.usuario.username = this.username;
      this.editarUsuario();
    }
  }

  actualizarPassword(){
    
    if(this.usuario){
      this.usuario.password = this.nombre;
      this.editarUsuario();
    }
  }

  cargarUsuario(){
    const id2 = Number(this.id)
    this.servicio.obtenerUsuariosPorId(id2).subscribe( usuariosServidor => {
      this.usuario = usuariosServidor;
      console.log("Termino el servicio");
    });

    console.log(this.id);
    
    console.log("Termino ejecucion del metodo");
  }

  editarUsuario(){
    if(this.usuario){
      this.servicio.editarUsuario(this.usuario).subscribe( usuario =>{
        alert("usuario editado: " + this.usuario?.nombre);
      });
    }
    window.location.reload();
  }


}
