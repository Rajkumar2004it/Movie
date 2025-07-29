import { Component } from '@angular/core';
import { Favourite } from '../../service/favourite';
import { ActivatedRoute, Router } from '@angular/router';
import { Mtservice } from '../../service/mtservice';
import { Bookings } from '../../service/bookings';

@Component({
  selector: 'app-mandetails',
  standalone: false,
  templateUrl: './mandetails.html',
  styleUrl: './mandetails.css'
})
export class Mandetails {
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
}
