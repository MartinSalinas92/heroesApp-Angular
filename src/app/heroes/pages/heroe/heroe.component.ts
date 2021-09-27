import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroeService } from '../../services/heroe.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }

  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!:Heroes

  constructor(private activateRouted : ActivatedRoute,
              private heroesservice :HeroeService,
              private router :Router
              ) { }

  ngOnInit(): void {

      //utilizamos para capturar el id
      this.activateRouted.params
      .pipe(
        switchMap(({id})=>this.heroesservice.getHeroesId(id))
      )
      .subscribe(heroe => this.heroe= heroe)
  }

  //funcion para regresar a menu anterior

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
