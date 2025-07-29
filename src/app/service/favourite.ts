  import { Injectable } from '@angular/core';
  import { of } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class Favourite {
    fav: any[] = [

    ]
    addtofav(obj: any) {
    const favitem=this.fav.find(e=>e.movieid==obj.movieid);
    if(favitem){
      return "Already Exists"
    }
    else{ 
      this.fav.push(obj);
        return "Added To Favourites";
        }  
    }
    

    getfavlength(){
      return this.fav.length;
    }
    getfavitems(){
      return of(this.fav)
    }
    

    deleteitem(pid:any){
      const index=this.fav.findIndex(e=>e.movieid==pid);
    
        this.fav.splice(index,1)
        return "deleted"
      
    
    }
  }
