import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { HomeAdminComponent } from './component/home-admin/home-admin.component';
import { HomeVendedorComponent } from './component/home-vendedor/home-vendedor.component';
import { ListaVendedorComponent } from './component/lista-vendedor/lista-vendedor.component';
import { ListaVentasComponent } from './component/lista-ventas/lista-ventas.component';
import { ProductosComponent } from './component/productos/productos.component';
import { RealizarVentaComponent } from './component/realizar-venta/realizar-venta.component';
import { MisDatosComponent } from './component/mis-datos/mis-datos.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { AtestComponent } from './component/atest/atest.component';
import { AuthService } from './services/auth.service';
import { AutenticacionGuard } from './autenticacion.guard';


export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },


  { path: 'admin', component: HomeAdminComponent, canActivate: [AutenticacionGuard]},
  { path: 'admin/vendedor', component: ListaVendedorComponent, canActivate: [AutenticacionGuard] },
  { path: 'admin/ventas', component: ListaVentasComponent , canActivate: [AutenticacionGuard]},
  { path: 'admin/reporte', component: ReporteComponent , canActivate: [AutenticacionGuard]},
  { path: 'vendedor/:id', component: HomeVendedorComponent, canActivate: [AutenticacionGuard] },
  { path: 'vendedor/productos/:id', component: ProductosComponent, canActivate: [AutenticacionGuard] },
  { path: 'vendedor/realizarventa/:id', component: RealizarVentaComponent , canActivate: [AutenticacionGuard]},
  { path: 'vendedor/misdatos/:id', component: MisDatosComponent, canActivate: [AutenticacionGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule,],
  providers: [
    AuthService,
    AutenticacionGuard
  ]
})
export class AppRoutingModule { }
