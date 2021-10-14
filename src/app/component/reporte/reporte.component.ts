import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  filtro: string = "sin filtro";

  constructor() { }

  cambiarfiltro(filtronuevo: string){
    this.filtro = filtronuevo
  }

  ngOnInit(): void {
  }

}
