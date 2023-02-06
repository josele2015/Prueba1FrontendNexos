import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosTarjetasComponent } from './datos-tarjetas.component';
import { HomeComponent } from '../home/home.component';

const routes:Routes=[{
  path:'tarjetas',
  component:   DatosTarjetasComponent,
  children: []
  
},
{path: 'home', 
component: DatosTarjetasComponent,
loadChildren:()=>import ("../home/home-routing.module").then(m=>m.AppRoutingModule)
}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }