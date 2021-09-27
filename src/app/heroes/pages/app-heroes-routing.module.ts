import {Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListadoComponent } from './listado/listado.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HeroeComponent } from './heroe/heroe.component';




const routes :Routes =[

  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'listado',
        component:ListadoComponent
      },
      {
        path:'Agregar',
        component:AgregarComponent
      },
      {
        path:'editar/:id',
        component:AgregarComponent
      },
      {
        path:'buscar',
        component:BuscarComponent
      },
      {
        path:':id',
        component:HeroeComponent
      },
      {
        path:'**',
        redirectTo:'listado'
      }


    ]
  }
]




@NgModule({

  imports: [
      RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppHeroesRoutingModule { }
