import { Heroes } from './../interfaces/heroes.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  //llamo de la carpeta enviroment para traer la variable de entorno
  private BaseUrl :string= environment.URlBase

  constructor( private http: HttpClient) { }

  getHeroes(){

    return this.http.get<Heroes[]>( `${this.BaseUrl}/heroes`)
  }

  //Heroes por id
  getHeroesId(id: string):Observable<Heroes>{
      return this.http.get<Heroes>(`${this.BaseUrl}/heroes/${id}`)
  }

  //Buscar Heroes
  sugerenciasHeroes(termino:string):Observable<Heroes[]>{

      return this.http.get<Heroes[]>( `${this.BaseUrl}/heroes?q=${termino}&_limit=3`)
  }

  //Guardar Heroes

  AgregarHeroes(heroe : Heroes):Observable<Heroes>{
        return this.http.post<Heroes>(`${this.BaseUrl}/heroes/`, heroe)
  }
  //Editar Heroes

  ModificarHeroes(heroe : Heroes):Observable<Heroes>{
        return this.http.put<Heroes>(`${this.BaseUrl}/heroes/${heroe.id}`, heroe)
  }
  //Eliminar Heroes

  EliminarHeroes(id : string):Observable<any>{
    return this.http.delete<any>(`${this.BaseUrl}/heroes/${id}`)
  }

}
