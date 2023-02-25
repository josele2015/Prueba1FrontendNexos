import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosTarjetasComponent } from './datos-tarjetas.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './datos-tarjetas-routing.module';
import { DatosTarjetasService } from '../service/datos-tarjetas.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatosTarjetasComponent
  ],
  imports: [
    CommonModule,AppRoutingModule,
    FormsModule,
  ],
  providers:[DatosTarjetasService ]

})
export class DatosTarjetasModule { }
