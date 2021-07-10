import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/services/infopagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  annio : number = new Date().getFullYear();
  
  constructor(public _servicio:InfopaginaService) { }

  ngOnInit() {
  }

}
