import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino :string ='';
  Heroes :Heroes[]= [];

  heroeSeleccionado :Heroes | undefined

  constructor(private serviceHeroes :HeroeService) { }

  ngOnInit(): void {
  }

  buscando(){

    this.serviceHeroes.sugerenciasHeroes(this.termino.trim())
      .subscribe(heroes=>this.Heroes = heroes)



  }

  opcionSeleccionada( event : MatAutocompleteSelectedEvent){
    //console.log(event)
    if(!event.option.value){

      console.log('No hay valor')

      this.heroeSeleccionado= undefined

      return;
    }else{

       //Guardo en una variable lo que me viene en el evento

    const heroesenBusqueda :Heroes= event.option.value

    //ahora definimos la variable que esta arriba que es Termino
    this.termino= heroesenBusqueda.superhero


    //llamamos las funciones del servicio
    this.serviceHeroes.getHeroesId(heroesenBusqueda.id)
      .subscribe(heroes=>this.heroeSeleccionado=heroes)


    }


  }

}
