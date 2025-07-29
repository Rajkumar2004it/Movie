import { Component } from '@angular/core';
import { Mtservice } from '../../service/mtservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userviewmovies',
  standalone: false,
  templateUrl: './userviewmovies.html',
  styleUrl: './userviewmovies.css'
})
export class Userviewmovies {
constructor(private service:Mtservice,private router:Router){}
    mymovies:any;

    opendetails(pid:any){
     
      this.router.navigateByUrl(`/usernav/moviedetails/${pid}`)
    }

    ngOnInit(){
        this.service.getmovies().subscribe((data)=>{
          this.mymovies=data;
         
        })
    }
}
