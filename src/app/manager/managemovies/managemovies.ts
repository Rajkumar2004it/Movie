import { Component } from '@angular/core';
import { Mtservice } from '../../service/mtservice';

@Component({
  selector: 'app-managemovies',
  standalone: false,
  templateUrl: './managemovies.html',
  styleUrl: './managemovies.css'
})
export class Managemovies {
  constructor(private ser:Mtservice){}
        mymovies:any;
        ngOnInit(){
         this.ser.getmovies().subscribe((res)=>{
           this.mymovies=res;
    
             })
        }
        result:any;
        deletenow(pid:any){
          this.result=this.ser.deletemovies(pid);
          alert(this.result);

        }
       

        updateobj:any;
        updatecontent(content:any){
              this.updateobj=content;
        }
        updatenow(){
         this.result= this.ser.updatemovies(this.updateobj)
        }
}
