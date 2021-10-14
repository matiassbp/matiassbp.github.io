import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-vendedor',
  templateUrl: './lista-vendedor.component.html',
  styleUrls: ['./lista-vendedor.component.css']
})
export class ListaVendedorComponent implements OnInit {

  MostrarCrear: boolean = false;
  MostrarEditar: boolean = false;
  usuarios:Usuario[] =[];
  usuarioSelected: Usuario;

  constructor(private servicio: UsuarioService) {
    this.usuarioSelected = {id: 0, nombre: "", username: "", email: "", password:"", admin:false};

  }

  ngOnInit(): void {
    this.cargarvendedores();
  }

  cambiarVariable(){
    this.MostrarEditar = false

    if (this.MostrarCrear) {
      this.MostrarCrear = false
    }
    else {
      this.MostrarCrear = true
    }
  }

  cargarvendedores(){
    this.servicio.obtenerUsuarios().subscribe( usuariosServidor => {
      this.usuarios = usuariosServidor;
      console.log("Termino el servicio");
    });

    console.log("Termino ejecucion del metodo");
  }

  mostraredit(usuarioselected: Usuario){

    this.MostrarCrear = false

    if (this.MostrarEditar) {
      this.MostrarEditar = false
    }
    else {
      this.MostrarEditar = true
    }
    this.usuarioSelected = usuarioselected;
  }

  eliminarUsuario(usuarioaeliminar:Usuario){
    this.servicio.eliminarUsuario(usuarioaeliminar).subscribe( usuario =>{
      alert("usuario eliminado: " + usuarioaeliminar.username)
    });
    window.location.reload();
  }


}
