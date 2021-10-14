import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  @Input() productoSelected: producto;

  id: string|null = '';

  nombre:string = "";
  caracteristicas:string = "";
  cantidad:number = 0;
  precio:number = 0;
  marca:string = "";
  categoria:string = "";
  vendedor:string = "";
  idvendedor:number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private servicio: ProductoService) {
    this.productoSelected = {nombre: "", caracteristicas: "", cantidad:0, precio:0, marca:"", categoria:"", vendedor:"", idvendedor:0}
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  actualizarDatos(){
    if(this.nombre === ""){
      this.productoSelected.nombre = this.productoSelected.nombre;
    }else{
      this.productoSelected.nombre = this.nombre;
    }

    if(this.caracteristicas === ""){
      this.productoSelected.caracteristicas = this.productoSelected.caracteristicas;
    }else{
      this.productoSelected.caracteristicas = this.caracteristicas;
    }

    if(this.cantidad === 0){
      this.productoSelected.cantidad = this.productoSelected.cantidad;
    }else{
      this.productoSelected.cantidad = this.cantidad;
    }

    if(this.precio === 0){
      this.productoSelected.precio = this.productoSelected.precio;
    }else{
      this.productoSelected.precio = this.precio;
    }

    if(this.marca === ""){
      this.productoSelected.marca = this.productoSelected.marca;
    }else{
      this.productoSelected.precio = this.precio;
    }

    if(this.categoria === ""){
      this.productoSelected.categoria = this.productoSelected.categoria;
    }else{
      this.productoSelected.categoria = this.categoria;
    }
  }

  editarProducto(){
    this.actualizarDatos();
    this.servicio.editarProducto(this.productoSelected).subscribe( usuario =>{
      alert("usuario editado: " + this.productoSelected.nombre);
    });
  }

}
