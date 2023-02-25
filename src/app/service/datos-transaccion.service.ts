import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosTransaccionService {

  constructor(private HttpClient: HttpClient ) { }
  public postCrearTransaccion(requestCrearTransaccion:RequestCrearTransaccion):
    Observable<ResponseCrearTransaccion|null>{
    return this.HttpClient.post<ResponseCrearTransaccion|null>("/transaccion/v2/postCrearTransaccion",requestCrearTransaccion);
  }
  public putAnularTransaccion(requesAnularTransaccion:RequestAnularTransaccion):
    Observable<ResponseAnularTransaccion|null>{
    return this.HttpClient.put<ResponseAnularTransaccion|null>("/transaccion/v2/putAnularTransaccion",requesAnularTransaccion);
  }
}
interface RequestCrearTransaccion{
  pAN:string;
  numeroReferencia:string;
  totalCompra:number;
  direccionCompra:string 
}
interface ResponseCrearTransaccion {
  codigorespuesta:string; 
	mensaje:string;
	estadoTransaccion:string;
	numeroReferencia:string 
}
interface RequestAnularTransaccion{
  pAN:string; 
  numeroReferencia:string;
  totalCompra:number  
}
interface ResponseAnularTransaccion{
  codigoRespuesta:string; 
	mensaje:string 
	numeroReferencia:number
}