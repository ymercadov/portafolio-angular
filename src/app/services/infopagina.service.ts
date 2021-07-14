import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info:InfoPagina = {};
  cargada=false;
  //equipo: any = [];
  equipo: any[] = [];
  constructor(private http: HttpClient) { 
    this.cargarInfo();  
    this.cargarEquipo(); 
  }

  private cargarInfo(){
     //leer el archivo json
    //necesito un modulo en particular para realizar peticiones http, para eso lo importamos en el 
    //app module
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina) => {
      this.cargada=true;
      this.info = resp;

    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-6a672-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) => {
      this.equipo = resp;
       // console.log(resp);
    });
  }
}
