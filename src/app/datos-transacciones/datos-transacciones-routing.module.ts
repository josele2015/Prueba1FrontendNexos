import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosTransaccionesComponent } from './datos-transacciones.component';
import { HomeComponent } from '../home/home.component';

const routes:Routes=[{
  path:'transacciones',
  component:   DatosTransaccionesComponent,
  children: []
  
}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }