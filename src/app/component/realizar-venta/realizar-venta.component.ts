import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ventas2 } from 'src/app/modelo/ventas2';
import { Ventas2Service } from 'src/app/services/ventas2.service';

@Component({
  selector: 'app-realizar-venta',
  templateUrl: './realizar-venta.component.html',
  styleUrls: ['./realizar-venta.component.css']
})
export class RealizarVentaComponent implements OnInit {

  codigo1:string="";
  cantidad2:string="";
  idvendedor:string|null="";
  id:number=0;

  constructor(private servicio: Ventas2Service, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idvendedor = this.route.snapshot.paramMap.get('id')
    this.id = Number(this.idvendedor)
  }

  realizarVentass(){
    alert(this.codigo1 + " <-----codigo" + "\n" + this.cantidad2 + " <-----cantidad" );
    let v:Ventas2= {
      codigo:this.codigo1,
      cantidad:this.cantidad2,
      idvendedor:this.id
    };
    console.log("entre al metodo");
    console.log(v);
    this.servicio.realizarVenta(v).subscribe();
    window.location.reload();
    
    
  }

}
