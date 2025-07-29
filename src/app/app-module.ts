import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './manager/home/home';
import { Addmovies } from './manager/addmovies/addmovies';
import { Viewmovies } from './manager/viewmovies/viewmovies';
import { Managemovies } from './manager/managemovies/managemovies';
import { Navbar } from './manager/navbar/navbar';
import { Userhome } from './user/userhome/userhome';
import { Userviewproducts } from './user/userviewproducts/userviewproducts';
import { Userfav } from './user/userfav/userfav';
import { Userdetails } from './user/userdetails/userdetails';
import { Usernav } from './user/usernav/usernav';
import { Userviewmovies } from './user/userviewmovies/userviewmovies';
import { Login } from './login/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Userorders } from './user/userorders/userorders';
import { Moviedetails } from './user/moviedetails/moviedetails';
import { Favdetails } from './user/favdetails/favdetails';
import { Mandetails } from './manager/mandetails/mandetails';

@NgModule({
  declarations: [
    App,
    Home,
    Addmovies,
    Viewmovies,
    Managemovies,
    Navbar,
    Userhome,
    Userviewproducts,
    Userfav,
    Userdetails,
    Usernav,
    Userviewmovies,
    Login,
    Userorders,
    Moviedetails,
    Favdetails,
    Mandetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
