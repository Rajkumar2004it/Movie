import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Favourite } from '../../service/favourite';
import { Bookings } from '../../service/bookings';

@Component({
  selector: 'app-usernav',
  standalone: false,
  templateUrl: './usernav.html',
  styleUrl: './usernav.css'
})
export class Usernav {
   constructor(private router:Router,private fav1:Favourite, private book:Bookings){}
logout(){
  alert('you are logging out')
  localStorage.removeItem("user");
  this.router.navigateByUrl("");
}
user:any; username:any;
ngOnInit(){
if(localStorage.getItem('user')!=null){
  this.user=localStorage.getItem('user');
  this.user=JSON.parse(this.user);
  this.username=this.user.username;
}
else{
  this.router.navigateByUrl("")
}
}
len=0; length=0;
ngDoCheck(){
  this.len=this.fav1.getfavlength();
  this.length=this.book.getbooklength();
}

}
