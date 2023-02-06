import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosTransaccionesComponent } from './datos-transacciones.component';
import { HomeComponent } from '../home/home.component';

const routes:Routes=[{
  path:'transacciones',
  component:   DatosTransaccionesComponent,
  children: []
  
},
{path: 'home', 
component: DatosTransaccionesComponent,
loadChildren:()=>import ("../home/home-routing.module").then(m=>m.AppRoutingModule)
}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }