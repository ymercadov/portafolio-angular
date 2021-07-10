import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info:InfoPagina = {};
  cargada=false;

  constructor(private http: HttpClient) { 

    //leer el archivo json
    //necesito un modulo en particular para realizar peticiones http, para eso lo importamos en el 
    //app module
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina) => {
      this.cargada=true;
      this.info = resp;
        console.log(resp);
    });
  }
}
