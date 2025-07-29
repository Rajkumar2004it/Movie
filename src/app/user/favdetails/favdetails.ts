import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mtservice } from '../../service/mtservice';
import { Favourite } from '../../service/favourite';
import { Bookings } from '../../service/bookings';

@Component({
  selector: 'app-favdetails',
  standalone: false,
  templateUrl: './favdetails.html',
  styleUrl: './favdetails.css'
})
export class Favdetails {
constructor(private bs: ActivatedRoute, private service: Mtservice, private fav: Favourite, private ord: Bookings,private router:Router) {

  }
  pid: any; obj: any;
  result: any;
  
  ngOnInit() {
    this.pid = this.bs.snapshot.paramMap.get("id");
    console.log("coming from details " + this.pid);
    this.obj = this.service.getmoviebyid(this.pid);
  }

  addNow() {
    this.result = this.fav.addtofav(this.obj);
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
      movieid: this.movie.movieid,
      moviename: this.movie.moviename,
      movieprice: this.movie.movieprice,
      movieimage: this.movie.movieimage,
      bookeddate:new Date(),
      username:this.username,
      address:this.address,
      tickets:this.tickets,
      phone:this.phone,
      

    }
    this.result=this.ord.addtobookings(this.productobj);
     
  this.tickets = '';
  this.phone = '';
  }

    noresult: any;
  deletenow(pid: any) {
    this.noresult = this.fav.deleteitem(pid);
    alert("Removing from favourites");
    this.router.navigateByUrl("/usernav/userfav");

  }
}
