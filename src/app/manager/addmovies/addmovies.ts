import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mtservice } from '../../service/mtservice';

@Component({
  selector: 'app-addmovies',
  standalone: false,
  templateUrl: './addmovies.html',
  styleUrl: './addmovies.css'
})
export class Addmovies {
     movieform:FormGroup=new FormGroup({});
    constructor(private fb:FormBuilder ,private as:Mtservice){
      this.movieform=this.fb.group({
        moviename:['',Validators.required],
        movieimage:['',Validators.required],
        moviecast:['',Validators.required],
        moviecrew:['',Validators.required],
        movieprice:['',Validators.required],
        moviedata:['',Validators.required],
        movietype:['',Validators.required],
        movieid:['',Validators.required]
        
      })
    }
    result:any;
     submitmovie(){
      this.result=this.as.addmovies(this.movieform.value);
     alert("Movie Added")

      this.movieform.reset();
     }
}
