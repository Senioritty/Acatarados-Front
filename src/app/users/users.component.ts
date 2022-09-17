import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  us!: Users[];
  use = {
    id:" ",
    nombre:" ",
    email:" ",
    }

  constructor(private usersServicio:UsersService) { }
  
  ngOnInit(): void {
     this.traerUsers();
  
  }
  
  public traerUsers(){
   this.usersServicio.obtenerUsers().subscribe(dato =>{this.us = dato}) 
    }
    public modifUsers(us:Users){
      if (us.nombre != " "){
       
        this.usersServicio.modificarUsers(us).subscribe(()=>this.traerUsers());
      }
      else{  alert("El nombre no puede estar en blanco")}
      }
    
      public delUsers(users:Users):void{
       this.usersServicio.borrarUsers(users).subscribe(()=>this.traerUsers());
      
       
     }
     public altaUsers(us:Users){
      if (us.nombre != " "){
        
      this.usersServicio.crearUsers(us).subscribe((dato: { id: string; nombre: string; email: string}) =>this.traerUsers());
      
      }
      else{  alert("El nombre no puede estar en blanco")}
    }
    recargar(): void {
      window.location.reload();
    }
  
    
    
    }
    