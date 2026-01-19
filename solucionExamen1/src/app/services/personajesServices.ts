import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class PersonajesSrvices {
    public personajesURL:string;

    constructor(public _http:HttpClient){
        this.personajesURL='https://thesimpsonsapi.com/api/characters';
    }

    getPersonajes():Observable<any>{
        return this._http.get(this.personajesURL);
    }

    getPersonajesById(id:number):Observable<any>{
        return this._http.get(`${this.personajesURL}/${id}`);
    }

    postPersonajes(datosPersonajes:any):Observable<any>{
        return this._http.post(this.personajesURL,datosPersonajes);
    }

    putPersonajes(datosPersonajes:any,id:number):Observable<any>{
        return this._http.put(`${this.personajesURL}/${id}`,datosPersonajes);
    }

    deletePersonajes(id:number):Observable<any>{
        return this._http.delete(`${this.personajesURL}/${id}`);
    }
}