import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta } from './pregunta';
import { HttpClient } from '@angular/common/http';
//hay que importar import { HttpClientModule } from '@angular/common/http'en el app.module.ts
//y hay que incluirlo en ls imports:[HttpClientModule]
@Injectable({
  providedIn: 'root'
})
// hay que importar observable, Httpclient y el modelo (users)
export class PreguntasService {


  //dirección del back
  //private baseURL="https://acatarados-back-senioritty.cleverapps.io/users";
   private baseURL="http://localhost:8080/acatarados";
  
 pregu = {
  idPregunta: 1,
  pregunta: '',
  respuestaPorId: [],
 }

 constructor(private httpClient:HttpClient) { }

  obtenerPreguntas():Observable<Pregunta>{
   
    
    return this.httpClient.get<Pregunta>(`${this.baseURL}`);
    
       
  }

  // modificarUsers( preguntas:Pregunta) { 
   
  //  return this.httpClient.put<Pregunta>(`${this.baseURL}`, preguntas)

  
  // }


}





