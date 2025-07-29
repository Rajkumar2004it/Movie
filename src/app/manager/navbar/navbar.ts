import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
constructor(private router:Router){}
logout(){
  alert('you are logging out')
  localStorage.removeItem("manager");
  this.router.navigateByUrl("");
}
user:any; username:any;
ngOnInit(){
if(localStorage.getItem('manager')!=null){
  this.user=localStorage.getItem('manager');
  this.user=JSON.parse(this.user);
  this.username=this.user.username;
}
else{
  this.router.navigateByUrl("")
}
}
}
