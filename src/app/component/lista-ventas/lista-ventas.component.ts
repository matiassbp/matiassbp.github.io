import { Component, OnInit } from '@angular/core';
import { Ventas2 } from 'src/app/modelo/ventas2';
import { Ventas2Service } from 'src/app/services/ventas2.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent implements OnInit {


  ventas:Ventas2[] =[];


  constructor(private servicio: Ventas2Service) { }

  ngOnInit(): void {
    this.cargarventas();
  }

  cargarventas(){
    this.servicio.obtenerVentas().subscribe( ventaServidor => {
      this.ventas = ventaServidor;
      console.log("Termino el servicio");
    });

    console.log("Termino ejecucion del metodo");
  }

}
