import { Component,ChangeDetectorRef } from '@angular/core';
import { Consulta } from '../../models/consulta.model';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  public consultaRealizada: Consulta;

  constructor(){
    this.consultaRealizada = new Consulta('', '','');
  }

  enviar():void{
  console.log("Formulario Enviado")
  console.log(this.consultaRealizada)
}

}

