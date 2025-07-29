import { Component } from '@angular/core';
import { Favourite } from '../../service/favourite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userfav',
  standalone: false,
  templateUrl: './userfav.html',
  styleUrl: './userfav.css'
})
export class Userfav {
constructor(private fav: Favourite,private router:Router) { }
  cartobj: any;
  ngOnInit() {
    this.fav.getfavitems().subscribe((res) => this.cartobj = res)
  }
  noresult: any;
  deletenow(pid: any) {
    this.noresult = this.fav.deleteitem(pid);
    alert(this.noresult);

  }
  
  opendetails(pid:any){
     
      this.router.navigateByUrl(`/usernav/favdetails/${pid}`)
    }

}
