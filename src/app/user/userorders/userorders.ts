import { Component } from '@angular/core';
import { Bookings } from '../../service/bookings';

@Component({
  selector: 'app-userorders',
  standalone: false,
  templateUrl: './userorders.html',
  styleUrl: './userorders.css'
})
export class Userorders {
 constructor(private book:Bookings){}
 movies:any;user:any;username:any;

 ngOnInit(){
  this.user=localStorage.getItem("user");
  this.user=JSON.parse(this.user);
  this.user=this.user.username;
  

this.book.getbookbyusername(this.username).subscribe((res)=>{
  this.movies=res;
})

}

}
