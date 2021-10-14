import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  nombre:string = "";
  caracteristicas1:string = "";
  cantidad1:number = 0;
  precio1:number = 0;
  marca1:string = "";
  categoria1:string = "";
  vendedor: string = "nombre vendedor";

  idvendedor2:string|null="";
  idvendedor:number=0;

  constructor(private servicio: ProductoService, private router: Router, private route: ActivatedRoute) {



   }

  ngOnInit(): void {
    this.idvendedor2 = this.route.snapshot.paramMap.get('id');
    this.idvendedor = Number(this.idvendedor2);
  }
  
  crearProducto(){
    let p:producto= {
      nombre:this.nombre,
      caracteristicas:this.caracteristicas1,
      cantidad:this.cantidad1,
      precio:this.precio1,
      marca:this.marca1,
      categoria:this.categoria1,
      vendedor: this.vendedor,
      idvendedor:this.idvendedor
    };
    console.log("entre al metodo");
    console.log(p);
    this.servicio.crearProductos(p).subscribe();
    alert("TARIAMOS");
    window.location.reload();
  }

}
