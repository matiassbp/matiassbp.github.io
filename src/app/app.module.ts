import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { HomeVendedorComponent } from './component/home-vendedor/home-vendedor.component';
import { HomeAdminComponent } from './component/home-admin/home-admin.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ListaVentasComponent } from './component/lista-ventas/lista-ventas.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { CrearProductoComponent } from './component/crear-producto/crear-producto.component';
import { CrearVendedorComponent } from './component/crear-vendedor/crear-vendedor.component';
import { EditarVendedorComponent } from './component/editar-vendedor/editar-vendedor.component';
import { RealizarVentaComponent } from './component/realizar-venta/realizar-venta.component';
import { MisDatosComponent } from './component/mis-datos/mis-datos.component';
import { EditarProductoComponent } from './component/editar-producto/editar-producto.component';
import { ListaVendedorComponent } from "./component/lista-vendedor/lista-vendedor.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AtestComponent } from './component/atest/atest.component';
import { VolverAtrasComponent } from './component/volver-atras/volver-atras.component';
import { LogoutComponent } from './component/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    HomeVendedorComponent,
    HomeAdminComponent,
    ProductosComponent,
    ListaVentasComponent,
    ReporteComponent,
    CrearProductoComponent,
    CrearVendedorComponent,
    EditarVendedorComponent,
    RealizarVentaComponent,
    MisDatosComponent,
    EditarProductoComponent,
    ListaVendedorComponent,
    AtestComponent,
    VolverAtrasComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
