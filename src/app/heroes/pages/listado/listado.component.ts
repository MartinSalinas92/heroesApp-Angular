
import { Component, OnInit } from '@angular/core';

import { HeroeService } from '../../services/heroe.service';
import { Heroes } from '../../interfaces/heroes.interface'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent implements OnInit {

  resultado :Heroes[]=[]



  constructor(private heroesServices :HeroeService) { }

  ngOnInit(): void {

    this.heroesServices.getHeroes()

      .subscribe((res) => {

        console.log(res)

        this.resultado=res
      })
  }



}
