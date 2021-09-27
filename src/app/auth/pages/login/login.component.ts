import { Auth } from './../../interfaces/auth.interfaces';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  constructor(private router: Router,
              private ServiceAuth :AuthService) { }


  login(){

    //Ir al backend
    //un usuario

    this.ServiceAuth.login()
        .subscribe(res =>{
          //console.log(res)

          //si existe el usuario
          if(res.id){
            this.router.navigate(['./heroes/listado'])
          }
        })

    //this.router.navigate(['./heroes/listado'])
  }

  Ingresarsinlogin(){

    this.ServiceAuth.logout();
    this.router.navigate(['./heroes/listado']);
  }

}
