import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { Personaje } from '../../models/personaje.model';
import { PersonajesSrvices } from '../../services/personajesServices';

@Component({
  selector: 'app-lista-personajes',
  standalone: false,
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css',
  providers: [PersonajesSrvices]
})
export class ListaPersonajes implements OnInit {

  public listaPersonajes: Personaje[]=[];
  public listaFiltrada: Personaje[]=[];

  public filtroNombre: string= '';
  public filtroGenero:string='';

  constructor(private _personajesSrvices:PersonajesSrvices, private cdr:ChangeDetectorRef)
  {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos():void{
    this._personajesSrvices.getPersonajes().subscribe({
      next:(response)=> {
        this.listaPersonajes=response.results;
        this.listaFiltrada=[...this.listaPersonajes];
        this.cdr.detectChanges();
      },
      error:(error)=>{
        console.error('Error al cargar datos de personajes', error);
      }
    });
  }

  aplicarFiltros():void{
    const name=this.filtroNombre.trim().toLocaleLowerCase();
    const gender= this.filtroGenero;

    this.listaFiltrada=this.listaPersonajes.filter(personaje=> {
      const cumpleName= !name || personaje.name.toLocaleLowerCase().includes(name); 
      const cumpleFiltro= !gender || personaje.gender===gender;

      return cumpleName && cumpleFiltro;
    });
    this.cdr.detectChanges();

  }

  limpiarFiltros():void{
    this.filtroNombre='';

    this.listaFiltrada=[...this.listaPersonajes];
    this.cdr.detectChanges();
  }


}
