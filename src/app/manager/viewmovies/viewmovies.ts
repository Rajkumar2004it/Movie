import { Component } from '@angular/core';
import { Mtservice } from '../../service/mtservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewmovies',
  standalone: false,
  templateUrl: './viewmovies.html',
  styleUrl: './viewmovies.css'
})
export class Viewmovies {
    constructor(private ms:Mtservice,private router:Router){}
   mymovies:any;
    ngOnInit(){
      this.ms.getmovies().subscribe((res)=>{
        this.mymovies=res;
      })
    }
     opendetails(pid:any){
     
      this.router.navigateByUrl(`/navbar/mandetails/${pid}`)
    }
}
