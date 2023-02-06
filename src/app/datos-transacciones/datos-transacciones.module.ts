import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosTransaccionesComponent } from './datos-transacciones.component';
import { Router,ActivatedRoute,ParamMap} from '@angular/router'
import { AppRoutingModule } from './datos-transacciones-routing.module';


@NgModule({
  declarations: [
    DatosTransaccionesComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ]
})
export class DatosTransaccionesModule { 
  constructor(private router:Router){

  } 
  routeHome(){
  this.router.navigate(['/home'])  
  }
}
