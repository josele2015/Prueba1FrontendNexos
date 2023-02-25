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
  
  valueCrearTitular:string="";
  valueCrearPAN:string="";
  valueCrearCedula:string="";
  valueCrearTipoTarjeta:string="";
  valueCrearTelefono:string="";
  crearNumeroValidacion:string="";
  crearCodigoRespuesta:string="";
  crearMensaje:string="";
  crearPAN:string="";

  valueEnrolarPAN:string="";
  valueEnrolarNumeroValidacion:string="";
  EnrolarCodigoRespuesta:string="";
  EnrolarMensaje:string="";
  EnrolarPAN:string="";

  valueConsultarTarjeta:string="";
  ConsultarTitular:string="";
  ConsultarCedula:string="";
  ConsultarTelefono:string="";
  ConsultarEstado:string="";
  ConsultarPAN:string="";

  valueEliminarPAN:string="";
  valueEliminarNumeroVAlidacion:string="";
  EliminarCodigoRespuesta:string="";
  EliminarMensaje:string="";

  constructor(private ActivatedRoute:ActivatedRoute
    ,private router:Router
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
    this.datosTarjetasService.PostcrearTarjeta({
      titular:this.valueCrearTitular,
      cedula:this.valueCrearCedula,
      pan:this.valueCrearPAN,
      telefono:this.valueCrearTelefono,
      tipo:this.valueCrearTipoTarjeta
    }).subscribe(x=>
      {
        if(x){
          this.crearNumeroValidacion=x.numeroValidacion;
          this.crearCodigoRespuesta=x.codigoRespuesta;
          this.crearMensaje=x.mensaje;
          this.crearPAN=x.pan;
        }
      });
  }
  ClickEnrolarTarjeta(){
    this.bEnrolarTarjeta=true;
    this.datosTarjetasService.PutEnrolarTarjeta({
      pAN:this.valueEnrolarPAN,
      numeroValidacion:this.valueEnrolarNumeroValidacion
    }).subscribe(x=>{
      if(x){
        this.EnrolarCodigoRespuesta=x.codigoRespuesta;
        this.EnrolarMensaje=x.mensaje;
        this.EnrolarPAN=x.pan;
      }
    })
  }
  ClickConsultarTarjeta(){
    this.bConsultarTarjeta=true;
    this.datosTarjetasService.GetconsultarTarjeta(this.valueConsultarTarjeta).subscribe(x=>
      {
        if(x){
          this.ConsultarTitular=x.titular;
          this.ConsultarCedula=x.cedula;
          this.ConsultarTelefono=x.telefono;
          this.ConsultarEstado=x.estado;
          this.ConsultarPAN=x.pan;
        }
      });
  }
  ClickEliminarTarjeta(){
    this.bEliminarTarjeta=true;
    this.datosTarjetasService.DeleteTarjeta({
      pAN             :this.valueEliminarPAN,
      numeroValidacion:parseInt(this.valueEliminarNumeroVAlidacion)
      }).subscribe(x=>{
        if(x){
          this.EliminarCodigoRespuesta=x.codigoRespuesta;
          this.EliminarMensaje=x.mensaje;
        }
    })
  }
}
