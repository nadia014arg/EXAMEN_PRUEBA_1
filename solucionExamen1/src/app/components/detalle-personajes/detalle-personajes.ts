import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Personaje } from '../../models/personaje.model';
import { PersonajesSrvices } from '../../services/personajesServices';

@Component({
  selector: 'app-detalle-personajes',
  standalone: false,
  templateUrl: './detalle-personajes.html',
  styleUrl: './detalle-personajes.css',
  providers:[PersonajesSrvices]
})
export class DetallePersonajes implements OnInit{

  public datosPersonaje! :Personaje;

  constructor(private _personajesServices:PersonajesSrvices, private cdr:ChangeDetectorRef, private route:ActivatedRoute)
  {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargaDetalle(id);
  }

  cargaDetalle(id:number):void{
    this._personajesServices.getPersonajesById(id).subscribe({
      next:(response)=>{
        this.datosPersonaje= response;
        this.cdr.detectChanges();
      },
      error:(error)=>{
        console.error('Error al cargar datos del personaje', error);
      }

    });
  }


}
