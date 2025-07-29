import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mtservice } from '../../service/mtservice';
import { Favourite } from '../../service/favourite';
import { Bookings } from '../../service/bookings';

@Component({
  selector: 'app-moviedetails',
  standalone: false,
  templateUrl: './moviedetails.html',
  styleUrl: './moviedetails.css'
})
export class Moviedetails {
 constructor(private bs: ActivatedRoute, private service: Mtservice, private cart: Favourite, private ord: Bookings) {

  }
  pid: any; obj: any;
  result: any;
  
  ngOnInit() {
    this.pid = this.bs.snapshot.paramMap.get("id");
    console.log("coming from details " + this.pid);
    this.obj = this.service.getmoviebyid(this.pid);
  }

  addNow() {
    this.result = this.cart.addtofav(this.obj);
    alert(this.result)
  }
  movie: any;
  
  selectmovie(obj: any) {
    this.movie = obj;
  }


  user: any; username: any;
  address: any; phone: any;
  productobj: any;tickets:any;
  totalprice:any;

  booknow() {
     if (!this.tickets || !this.phone) {
    alert("Please fill all required fields !");
    return;
  }
    this.productobj = {
     
      moviename: this.movie.moviename,
      movieprice: this.movie.movieprice,
      movieimage: this.movie.movieimage,
      bookeddate:new Date(),
      tickets:this.tickets,
      phone:this.phone,
      

    }
    this.result=this.ord.addtobookings(this.productobj);
    
  this.tickets = '';
  this.phone = '';
  }
}
