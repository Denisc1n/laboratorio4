import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthloginService } from './services/authlogin.service';
import { PaisesComponent } from './pages/paises/paises.component';
import { ListadoEntidadComponent } from './pages/listado-entidad/listado-entidad.component';
import { PaisesDetalleComponent } from './pages/paises-detalle/paises-detalle.component';
import { DetalleEntidadComponent } from './pages/detalle-entidad/detalle-entidad.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { BotonEntidadComponent } from './components/boton-entidad/boton-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    PaisesComponent,
    ListadoEntidadComponent,
    PaisesDetalleComponent,
    DetalleEntidadComponent,
    ControlEntidadComponent,
    BotonEntidadComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthloginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
