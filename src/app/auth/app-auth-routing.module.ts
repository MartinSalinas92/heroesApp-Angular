
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MaterialModule } from '../material/material.module';



const route: Routes=[

  {
    path:'',
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'registro',
        component:RegistroComponent
      }
    ]
  }
]







@NgModule({

  imports: [
    RouterModule.forChild(route),

  ],
  exports:[
    RouterModule
  ]
})
export class AppAuthRoutingModule { }
