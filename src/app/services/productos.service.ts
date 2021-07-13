import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos:Producto[] = [];

  constructor(private htpp:HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
   this.htpp.get('https://angular-html-6a672-default-rtdb.firebaseio.com/productos_idx.json')
   .subscribe((resp :Producto[]) => {
     console.log(resp);
     this.productos = resp;     

     setTimeout(()=>{
      this.cargando = false;
     }, 2000);
     
   })
  }
}
