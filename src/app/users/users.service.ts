import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
//hay que importar import { HttpClientModule } from '@angular/common/http'en el app.module.ts
//y hay que incluirlo en ls imports:[HttpClientModule]
@Injectable({
  providedIn: 'root'
})
// hay que importar observable, Httpclient y el modelo (users)
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  //dirección del back
  private baseURL="https://aaa-backend-senioritty.cleverapps.io/users";
  
  usr = {
    id:" ",
    nombre:" ",
    email:" ",
    
  }

  obtenerUsers():Observable<Users[]>{
   
    
    return this.httpClient.get<Users[]>(`${this.baseURL}`);
    
       
  }

  modificarUsers( users:Users) { 
   
   return this.httpClient.put<Users>(`${this.baseURL}`, users)

  
  }

  borrarUsers(users:Users){
   
   return this.httpClient.delete<Users>(this.baseURL+"/"+users.id)



   
  }
  crearUsers(users:Users){
   
    return this.httpClient.post<Users>(`${this.baseURL}`, users)
  
  }

}





