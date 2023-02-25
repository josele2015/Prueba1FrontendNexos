import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosTransaccionesComponent } from './datos-transacciones.component';
import { Router,ActivatedRoute,ParamMap} from '@angular/router'
import { AppRoutingModule } from './datos-transacciones-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatosTransaccionesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ]
})
export class DatosTransaccionesModule { 
  constructor(private router:Router){
  } 
  routeHome(){
    this.router.navigate(['/home'])  
  }
}
