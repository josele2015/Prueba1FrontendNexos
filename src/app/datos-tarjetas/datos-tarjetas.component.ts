import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-datos-tarjetas',
  templateUrl: './datos-tarjetas.component.html',
  styleUrls: ['./datos-tarjetas.component.scss']
})
export class DatosTarjetasComponent implements OnInit{
  constructor(private ActivatedRoute:ActivatedRoute, private router:Router){
  }
  ngOnInit(): void {
    this.ActivatedRoute.data.subscribe(data=>{
      
    })
  }
  routeHome(){
    this.router.navigate(['/home'])  
  }
}
