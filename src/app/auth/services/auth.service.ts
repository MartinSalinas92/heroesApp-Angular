import { Auth } from './../interfaces/auth.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { pipe, Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Creamos una propiedad que viene del environments
  private BaseUrl :string =environment.URlBase

  //creamos una propiedad
  private _auth :Auth |undefined;

  get auth() : Auth{

    return {...this._auth!}
  }

  constructor(private http: HttpClient) { }

  verificacionAutenticacion(): Observable<boolean>{

    if(!localStorage.getItem('token')){

      return of(false);
    }else{
      return this.http.get<Auth>(`${this.BaseUrl}/usuarios/1`)
          .pipe(
            map(auth =>{

              //console.log('map', auth)
              this._auth= auth;
              return true;
            })

          )

    }

  }

  login(){

    return this.http.get<Auth>(`${this.BaseUrl}/usuarios/1`)
                .pipe(
                  tap(res => this._auth = res),
                  tap(res => localStorage.setItem('token', res.id))
                )
  }

  logout(){
    this._auth= undefined;

  }
}
