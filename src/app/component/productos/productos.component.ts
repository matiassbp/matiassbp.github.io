import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/modelo/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  MostrarCrear: boolean = false;
  MostrarEditar: boolean = false;

  productos: producto[] = [];
  idvendedor: string | null = "";
  id: number = 0;

  productoSelected: producto;

  constructor(private servicio: ProductoService, private router: Router, private route: ActivatedRoute) {
    this.productoSelected = {nombre: "", caracteristicas: "", cantidad:0, precio:0, marca:"", categoria:"", vendedor:"", idvendedor:0}
  }

  cambiarVariable() {
    this.MostrarEditar = false

    if (this.MostrarCrear) {
      this.MostrarCrear = false
    }
    else {
      this.MostrarCrear = true
    }

  }

  mostraredit(producto: producto) {
    this.MostrarCrear = false

    if (this.MostrarEditar) {
      this.MostrarEditar = false
    }
    else {
      this.MostrarEditar = true
    }

    this.productoSelected = producto;

  }

  ngOnInit(): void {
    this.idvendedor = this.route.snapshot.paramMap.get('id');
    this.id = Number(this.idvendedor);
    this.cargarproductos();
  }


  cargarproductos() {
    this.servicio.obtenerProductos().subscribe(productoservidor => {
      this.productos = productoservidor;
      console.log("Termino el servicio");
    });

    console.log("Termino ejecucion del metodo");
  }



  eliminarProducto(productoaeliminar: producto) {
    this.servicio.eliminarProducto(productoaeliminar).subscribe(producto => {
      alert("usuario eliminado: " + producto)
    });
    window.location.reload();
  }


}
