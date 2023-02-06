import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosTarjetasComponent } from './datos-tarjetas.component';

const routes:Routes=[{
  path:'tarjetas',
  component:   DatosTarjetasComponent,
  children: []
  
}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
