import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthloginService } from './services/authlogin.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthloginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
