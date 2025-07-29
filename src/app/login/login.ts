import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router: Router) { }
  user = {
    username: '',
    password: ''
  }
  reqpwd: any;
  checklogin(form:any) {
    
    if (this.user.username == "admin" && this.user.password == "12345") {
      localStorage.setItem("manager", JSON.stringify(this.user));
      this.router.navigateByUrl("/navbar/home")
    }

    else {
      this.reqpwd = this.user.username.slice(0,3) + "123";
      if (this.reqpwd == this.user.password) {
        localStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigateByUrl("/usernav/userhome")
      }
      else{
        alert("Enter Correctly")
      }
    }
  }



}
