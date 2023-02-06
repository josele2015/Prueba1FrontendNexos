import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-datos-transacciones',
  templateUrl: './datos-transacciones.component.html',
  styleUrls: ['./datos-transacciones.component.scss']
})
export class DatosTransaccionesComponent implements OnInit{
  constructor(private ActivatedRoute:ActivatedRoute){
  }
  ngOnInit(): void {
    this.ActivatedRoute.data.subscribe(data=>{
      
    })
  }
}
