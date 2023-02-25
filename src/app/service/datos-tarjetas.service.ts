import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosTarjetasService {

  constructor(private HttpClient: HttpClient ) { }

  public PostcrearTarjeta(RequestTarjeta:RequestTarjeta):Observable<ResponseCrearTarjeta|null>{
    return this.HttpClient.post<ResponseCrearTarjeta|null>("/tarjeta/v2/postCrearTarjeta",RequestTarjeta);
  }
  public GetconsultarTarjeta(Pan:string):Observable<RequestConsultar|null>{
    return this.HttpClient.get<any|null>("/tarjeta/v2/getConsultarTarjeta?PAN="+Pan);       
  }
  public PutEnrolarTarjeta(RequestEnrolarTarjeta:RequestEnrolarTarjeta):Observable<ResponseEnrolarTarjeta|null>{
    return this.HttpClient.put<ResponseEnrolarTarjeta|null>("/tarjeta/v2/putEnrolarTarjeta",RequestEnrolarTarjeta);  
  }
  public DeleteTarjeta(RequestDeleteTarjeta:RequestDeleteTarjeta):Observable<ResponseDeleteTarjeta|null>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: RequestDeleteTarjeta,
    };
    return this.HttpClient.delete<ResponseDeleteTarjeta|null>("/tarjeta/v2/deleteTarjeta",options);       
  }
}
interface RequestTarjeta{
  titular?:string,
  cedula?:string,
  pan?:string,
  telefono?:string,
  tipo?:string
}
interface ResponseCrearTarjeta{
  mensaje:string,
  codigoRespuesta:string,
  numeroValidacion:string,
  pan:string
}
interface RequestConsultar{
  titular:string;
  cedula:string;
  telefono:string;
  estado:string;
  pan:string;
}
interface RequestEnrolarTarjeta{
  pAN:string,
  numeroValidacion:string
}
interface ResponseEnrolarTarjeta{
  codigoRespuesta:string;
	mensaje:string;
	pan:string;
}
interface RequestDeleteTarjeta{
  pAN:string;
	numeroValidacion:number
}
interface ResponseDeleteTarjeta{
  codigoRespuesta:string;
	mensaje:string;
}