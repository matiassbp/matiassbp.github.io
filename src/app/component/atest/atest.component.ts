import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-atest',
  templateUrl: './atest.component.html',
  styleUrls: ['./atest.component.css']
})
export class AtestComponent implements OnInit {

  constructor(private servicio: UsuarioService) { }
  usuarios:Usuario[] =[];
  ngOnInit(): void {
    this.cargarvendedores();
  }

  cargarvendedores(){
    this.servicio.obtenerUsuarios().subscribe();
  }

}
