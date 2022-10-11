import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pregunta } from './pregunta';
import { PreguntasService } from './pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})

export class PreguntaComponent implements OnInit {


 pre: Pregunta[]=[
 
 ]

  constructor(private preguServicio:PreguntasService, private router:Router) { }


  ngOnInit():void {
     this.traerPreguntas();
    }
    pregu = {
      idPregunta: 1,
      pregunta: " ",
      respuestaPorId:[],
     }

  public traerPreguntas(){
  this.preguServicio.obtenerPreguntas().subscribe(dato =>{this.pre = dato}) 
     }

  // }}
    }
