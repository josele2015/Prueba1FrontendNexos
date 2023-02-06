import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosTarjetasComponent } from '../datos-tarjetas/datos-tarjetas.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{path: 'tarjetas', 
component: HomeComponent,
loadChildren:()=>import ("../datos-tarjetas/datos-tarjetas-routing.module").then(m=>m.AppRoutingModule)
},
{path: 'transacciones', 
component: HomeComponent,
loadChildren:()=>import ("../datos-transacciones/datos-transacciones-routing.module").then(m=>m.AppRoutingModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
