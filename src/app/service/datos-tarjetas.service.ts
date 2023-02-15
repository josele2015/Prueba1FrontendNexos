import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosTarjetasService {

  constructor(private HttpClient: HttpClient ) { }

  public crearTarjeta(RequestTarjeta:RequestTarjeta):Observable<any|null>{
    return this.HttpClient.post<any|null>("api/tarjeta/v1/postCrearTarjeta",RequestTarjeta);
  }
  public consultarTarjeta(Pan:String):Observable<RequestConsultar|null>{
    return this.HttpClient.get<any|null>("api/tarjeta/v1/getConsultarTarjeta?PAN="+Pan);
  }
}
interface RequestTarjeta{
  titular?:String,
  cedula?:String,
  pan?:String,
  telefono?:String,
  tipo?:String
}
interface ResponseCrearTarjeta{
  mensaje?:String,
  codigoRespuesta?:String,
  numeroValidacion?:String,
  pan?:String
}
interface RequestConsultar{
  ConsultarTitular:String;
  ConsultarCedula:String;
  ConsultarTelefono:String;
  ConsultarEstado:String;
  ConsultarPAN:String;
 
}