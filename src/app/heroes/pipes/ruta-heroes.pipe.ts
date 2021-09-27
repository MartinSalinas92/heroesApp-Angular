import { Pipe, PipeTransform } from '@angular/core';

import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'rutaHeroes',
  //pure: true
})
export class RutaHeroesPipe implements PipeTransform {

  transform(heroe: Heroes ): string {

    if(!heroe.alt_img && !heroe.id){
      return 'assets/no-image.png'
    }else if(heroe.alt_img){
      return  heroe.alt_img
    }
    else{
      return `assets/heroes/${heroe.id}.jpg`;
    }

  }

}
