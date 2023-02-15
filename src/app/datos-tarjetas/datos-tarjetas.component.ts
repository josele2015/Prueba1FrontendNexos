import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosTarjetasService } from '../service/datos-tarjetas.service';

@Component({
  selector: 'app-datos-tarjetas',
  templateUrl: './datos-tarjetas.component.html',
  styleUrls: ['./datos-tarjetas.component.scss']
})
export class DatosTarjetasComponent implements OnInit{

  bCrearTarjeta:boolean=false;
  bEnrolarTarjeta:boolean=false;
  bConsultarTarjeta:boolean=false;
  bEliminarTarjeta:boolean=false;
  
  crearNumeroValidacion:String="";
  crearCodigoRespuesta:String="";
  crearMensaje:String="";
  crearPAN:String="";

  ConsultarTitular:String="";
  ConsultarCedula:String="";
  ConsultarTelefono:String="";
  ConsultarEstado:String="";
  ConsultarPAN:String="";

  constructor(private ActivatedRoute:ActivatedRoute, private router:Router
    ,private datosTarjetasService:DatosTarjetasService){
  }
  ngOnInit(): void {
    this.ActivatedRoute.data.subscribe(data=>{
      
    })
  }
  routeHome(){
    this.router.navigate(['/home'])  
  }

  ClickCrearTarjeta(){
    this.bCrearTarjeta=true;
    this.datosTarjetasService.consultarTarjeta("1234567890123456").subscribe(x=>
      {
        if(x){
          this.ConsultarTitular=x.ConsultarTitular;
          this.ConsultarCedula=x.ConsultarCedula;
          this.ConsultarTelefono=x.ConsultarTelefono;
          this.ConsultarEstado=x.ConsultarEstado;
          this.ConsultarPAN=x.ConsultarPAN;
        }
      });
  }

  ClickConsultarTarjeta(){
    this.datosTarjetasService.consultarTarjeta("1234567890123456").subscribe(x=>
      {
        if(x){
          this.ConsultarTitular=x.ConsultarTitular;
          this.ConsultarCedula=x.ConsultarCedula;
          this.ConsultarTelefono=x.ConsultarTelefono;
          this.ConsultarEstado=x.ConsultarEstado;
          this.ConsultarPAN=x.ConsultarPAN;
        }
      });
  }
}
