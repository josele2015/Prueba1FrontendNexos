import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppTransacciones';
  constructor(private router:Router){

  }
  routeDatosTarjetas(){
    this.router.navigate(['/tarjetas'])  
  }
  routeDatosTransacciones(){
    this.router.navigate(['/transacciones'])  
  }
}
