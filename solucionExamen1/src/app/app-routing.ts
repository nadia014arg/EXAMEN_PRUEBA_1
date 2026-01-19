/*HERRAMIENTAS */
import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { Route } from "@angular/router";

/*COMPONENT */

import { ListaPersonajes } from "./components/lista-personajes/lista-personajes";
import { DetallePersonajes } from "./components/detalle-personajes/detalle-personajes";
import { Inicio } from "./components/inicio/inicio";
import { Contacto } from "./components/contacto/contacto";

/*GUARDO RUTAS */

const misRutas : Routes= [

        {path:'',component:Inicio},
        {path:'personajes',component:ListaPersonajes},
        {path:'personajes/:id', component:DetallePersonajes},
        {path:'contacto',component:Contacto},
        {path:'**',component:Inicio},
]

/*EXPORTAR  */

export const appRoutinrProviders: any[]=[];
export const routing: ModuleWithProviders<Route>=RouterModule.forRoot(misRutas);