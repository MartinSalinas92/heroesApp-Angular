import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ `

      .container:{
        margin:10px
      }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,
              private authService : AuthService) { }

  ngOnInit(): void {

  }

 get getUser(){
      return this.authService.auth;
  }

  cerrarSesion(){

      this.router.navigate(['./auth/login'])
  }



}
