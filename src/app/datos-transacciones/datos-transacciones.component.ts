import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosTransaccionService } from '../service/datos-transaccion.service';

@Component({
  selector: 'app-datos-transacciones',
  templateUrl: './datos-transacciones.component.html',
  styleUrls: ['./datos-transacciones.component.scss']
})
export class DatosTransaccionesComponent implements OnInit{
    
    bCrearTransaccion:boolean=false;
    bAnularTransaccion:boolean=false;

    valueCrearPAN:string="";
    valueCrearNumeroReferencia:string="";
    valueCrearTotalCompra:string="";
    valueCrearDireccionCompra:string="";
    CrearCodigoRespuesta:string="";
    CrearMensaje:string="";
    CrearEstadoTransaccion:string="";
    CrearNumeroReferencia:string="";

    valueAnularPan:string="";
    valueAnularNumeroReferencia:string="";
    valueTotalCompra:string="";
    AnularCodigoRespuesta:string="";
    AnularMensaje:string="";
    AnularNumeroReferencia:string="";
    
    constructor(private ActivatedRoute:ActivatedRoute, private router:Router,
      private datosTransaccionService:DatosTransaccionService){
      }

  ngOnInit(): void {
    this.ActivatedRoute.data.subscribe(data=>{
      
    })
  }
  routeHome(){
    this.router.navigate(['/home'])  
  }

  clickCrearTransaccion(){
    this.bCrearTransaccion=true
    this.datosTransaccionService.postCrearTransaccion({
      pAN:this.valueCrearPAN,
      numeroReferencia:this.valueCrearNumeroReferencia,
      totalCompra:parseInt(this.valueCrearTotalCompra),
      direccionCompra:this.valueCrearDireccionCompra
    }).subscribe(x=>{
      if(x){
        this.CrearCodigoRespuesta=x.codigorespuesta;
        this.CrearMensaje=x.mensaje;
        this.CrearEstadoTransaccion=x.estadoTransaccion;
        this.CrearNumeroReferencia=x.numeroReferencia; 
      }
    })
  }


  clickAnularTransaccion(){
    this.bAnularTransaccion=true
    this.datosTransaccionService.putAnularTransaccion({
      numeroReferencia:this.valueAnularNumeroReferencia,
      pAN:this.valueAnularPan,
      totalCompra:parseInt(this.valueTotalCompra)
    }).subscribe(x=>{
      if(x){
        this.AnularCodigoRespuesta=x.codigoRespuesta;
        this.AnularMensaje=x.mensaje;
        this.AnularNumeroReferencia=x.numeroReferencia+"";
      }
    })
  }
 
}