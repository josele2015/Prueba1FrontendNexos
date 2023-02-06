import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatosTarjetasModule } from './datos-tarjetas/datos-tarjetas.module';
import { DatosTransaccionesModule } from './datos-transacciones/datos-transacciones.module';
import { RutaModule } from './ruta/ruta.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RutaModule,
    DatosTarjetasModule,
    DatosTransaccionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }