import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Bookings {
   book:any[]=[]



  addtobookings(obj:any){
    this.book.push(obj)
  }
getbooklength(){
  return this.book.length;
}

  getallbookings(){
    return of(this.book);
  }

  getbookbyusername(uname:any){
       return of(this.book.filter(e=>e.username==uname))
  }
}
