import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { ErrorComponent } from './pages/error/error.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { DetalleEntidadComponent } from './pages/detalle-entidad/detalle-entidad.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'detalle', component: DetalleEntidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
