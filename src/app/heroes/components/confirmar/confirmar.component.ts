import { Component, OnInit, Inject } from '@angular/core';
import { Heroes } from './../../interfaces/heroes.interface';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroes) { }

  ngOnInit(): void {
    console.log(this.data);
  }


  Borrar(){

    this.dialogRef.close(true)

  }

  Cerrar(){

    this.dialogRef.close()

  }

}
