import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutinrProviders } from './app-routing';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaPersonajes } from './components/lista-personajes/lista-personajes';
import { DetallePersonajes } from './components/detalle-personajes/detalle-personajes';
import { Inicio } from './components/inicio/inicio';
import { Contacto } from './components/contacto/contacto';

@NgModule({
  declarations: [
    App,
    ListaPersonajes,
    DetallePersonajes,
    Inicio,
    Contacto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    appRoutinrProviders,
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
