import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PreguntaComponent } from './pregunta/pregunta.component';
const routes: Routes = [
  {path:'users', component:UsersComponent},
  {path:'', redirectTo:'users', pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PreguntaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
