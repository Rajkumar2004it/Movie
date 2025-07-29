import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './manager/home/home';
import { Login } from './login/login';
import { Navbar } from './manager/navbar/navbar';
import { Addmovies } from './manager/addmovies/addmovies';
import { Viewmovies } from './manager/viewmovies/viewmovies';
import { Managemovies } from './manager/managemovies/managemovies';
import { Userhome } from './user/userhome/userhome';
import { Usernav } from './user/usernav/usernav';
import { Userviewmovies } from './user/userviewmovies/userviewmovies';
import { Userfav } from './user/userfav/userfav';
import { Userdetails } from './user/userdetails/userdetails';
import { Userorders } from './user/userorders/userorders';
import { Moviedetails } from './user/moviedetails/moviedetails';
import { Favdetails } from './user/favdetails/favdetails';
import { Mandetails } from './manager/mandetails/mandetails';


const routes: Routes = [

{path:"",component:Login},
{path:"navbar",component:Navbar,
  children:[
    {path:"home",component:Home},
    {path:"addmovies",component:Addmovies},
   {path:"mandetails/:id",component:Mandetails},
    {path:"viewmovies",component:Viewmovies},
    {path:"managemovies",component:Managemovies}
  ]
},
{path:"usernav",component:Usernav,
  children:[
    {path:"userhome",component:Userhome},
    {path:"userviewmovies",component:Userviewmovies},
    {path:"userfav",component:Userfav},
    {path:"moviedetails/:id",component:Moviedetails},
    {path:"favdetails/:id",component:Favdetails},
    {path:"userdetails",component:Userdetails},
    {path:"userorders",component:Userorders}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
