import { tap } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  constructor( private AuthService :AuthService,
               private router: Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean> | boolean {

    /*  if(this.AuthService.auth.id){

        return true;

      }
        console.log('bloqueado por authGuard- canActivate')
        return false;
      */

      return this.AuthService.verificacionAutenticacion()
          .pipe(
            tap(estaAutenticado =>{
              if(!estaAutenticado){
                this.router.navigate(['./auth/login'])
              }
            })
          )


  }



  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {

       /* if(this.AuthService.auth.id){

          return true;

        }
          console.log('bloqueado por authGuard- canLoad')
          return false;*/


          return this.AuthService.verificacionAutenticacion()
          .pipe(
            tap(estaAutenticado =>{
              if(!estaAutenticado){
                this.router.navigate(['./auth/login'])
              }
            })
          )


  }
}
