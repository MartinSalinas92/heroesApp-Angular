import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from './../../services/heroe.service';
import { Heroes, Publisher } from './../../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img{
        width: 100%;
        border-radius: 5px
      }
    `
  ]
})
export class AgregarComponent implements OnInit {


  publishers  =[
    {
      id:'DC Comics',
      desc: 'dc-comics'
    },
    {
      id:'Marvel Comics',
      desc: 'marvel-comics'
    }
  ];

  heroe: Heroes={

    id:'',
    alt_img:'',
    superhero:'',
    publisher: Publisher.DCComics,
    characters:'',
    alter_ego:'',
    first_appearance:''
  }

  constructor(private service :HeroeService,
              private ActivatedRoute :ActivatedRoute,
              private router :Router,
              private snakBar :MatSnackBar,
              public dialog :MatDialog) { }

  ngOnInit(): void {

    //en el if decimos que si no estamos en la ruta 'editar' no va retornar ningun id
    if(!this.router.url.includes('editar')){
        return ;
    }else{

      this.ActivatedRoute.params
      .pipe(
        switchMap(({id})=>this.service.getHeroesId(id))
      )
      //Aca recibimos lo que viene del pipe
        .subscribe( heroe=>this.heroe=heroe)

    }

  }

  guardar(){

    //console.log(this.heroe)

    if(this.heroe.superhero.trim().length == 0){
        //si el condicional da 0 entonces no retorna nada
        return ;

    }if(this.heroe.id){
      //Actualizar
      return this.service.ModificarHeroes(this.heroe)
              .subscribe(res=>
                //console.log('Actualizando',res)
                this.mostrarSnackBar('Registro Actualizado')
            )

    }else{
      //Guardar

      return this.service.AgregarHeroes(this.heroe)
              .subscribe( res =>{
                //console.log('Respuesta',res)

                this.router.navigate(['/heroes/editar', res.id])
                this.mostrarSnackBar('Registro Creado Correctamente')

              })

    }
  }

  Eliminar(){

    const dialogHeroes=this.dialog.open(ConfirmarComponent ,{

      width:'250px',
      data:this.heroe


    });

    dialogHeroes.afterClosed().subscribe(
      (result)=>{
          //console.log(result)
        if(result){
          this.service.EliminarHeroes(this.heroe.id)
            .subscribe(res =>{
              this.router.navigate(['/heroes/listado'])
            })
        }
      }
    )

   /* this.service.EliminarHeroes(this.heroe.id)
        .subscribe(res =>{

            console.log('eliminado', res)
            //Una vez eliminado vuelve a la ruta del listado
            this.router.navigate(['/heroes/listado'])

        })*/
  }

  //SnackBar de Material

  mostrarSnackBar( mensaje :string){
    this.snakBar.open( mensaje, 'ok!',{
      duration:2500
    }

    )
  }

}
