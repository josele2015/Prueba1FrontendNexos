import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosTarjetasComponent } from './datos-tarjetas/datos-tarjetas.component';
import { DatosTransaccionesComponent } from './datos-transacciones/datos-transacciones.component';

const routes: Routes = [{
  path:"",
 },{
  path:"tarjeta",
  component:DatosTarjetasComponent
},
{
  path:"transaccion",
  component: DatosTransaccionesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
