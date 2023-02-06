import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosTarjetasComponent } from './datos-tarjetas.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './datos-tarjetas-routing.module';


@NgModule({
  declarations: [
    DatosTarjetasComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ]
})
export class DatosTarjetasModule { }
