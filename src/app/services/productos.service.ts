import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos:Producto[] = [];
  productosFiltrados:Producto[] = [];

  constructor(private htpp:HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

    /*
    Adicionamos un poco de código acá para hacer que esto regrese algo 
    asíncrono quiero que trabaje en base a promesas una promesa es algo 
    asíncrono y es bastante útil para este tipo de problemas. Yo necesito 
    ejecutar cierto código hasta que esto se resuelva. Entonces hagámos lo 
    siguiente.
     */

    return new Promise((resolve, reject) =>{
      
      this.htpp.get('https://angular-html-6a672-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp :Producto[]) => {
        //console.log(resp);
        this.productos = resp;    
        this.cargando = false; 
        resolve();
        /*
        setTimeout(()=>{
         this.cargando = false;
        }, 2000);*/ 
        });

      })
  }

   getProducto(id:string){
    return this.htpp.get(`https://angular-html-6a672-default-rtdb.firebaseio.com/productos/${id}.json`);   
  }

  buscarProducto(termino:string){

    if(this.productos.length === 0)
    {
      //cargar Productos
      this.cargarProductos().then(()=> 
      {
        // ejecutar despues de tener los producto
        //Aplicar filtro
      })
    }
    else
    {
      //cargar con el filtro
      this.filtrarProductos(termino);
    }
    
  }

  private filtrarProductos(termino : string)
  {
    /*
      this.productosFiltrados = this.productos.filter(producto =>{
        return true;
      });    
    console.log(this.productosFiltrados);*/
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 )
      {
        this.productosFiltrados.push(prod);
      }
    });
  }
}
