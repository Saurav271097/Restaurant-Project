import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AuthService } from '../authservice/auth.service';
import { CartService } from '../cart.service';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email: string ='';
  // password: string =' ';

  msg:string='';

  user : User = new User();
  loginForm1: any;

  
  constructor(private router: Router, private ls:LoginserviceService, private authService:AuthService, private cartService:CartService) { }

  ngOnInit(): void {
    // this.email='';
    // this.password='';
  
  }
  goToPage(signup:String){
    this.router.navigate([`${signup}`]);
  }
  goToUser(userpage:String){
    this.router.navigate([`${userpage}`]);
  }

  loginData(logindata:any){
    this.ls.loginservice1(logindata.value).subscribe();
  }

  // login(){
  //   // this.user.email=this.email;
  //   // this.user.password=this.password;
  //   console.log(this.user);
  //   this.authService.Login(this.user).subscribe(res=>{
      
  //       alert("Username Or Password is Wrong");
  //       this.ngOnInit();
      
     
  //       alert("Login Successfull");
        
  //       this.router.navigateByUrl(['/userpage']);
     
  //   },err=>{
  //     alert("Login Failed");
  //     this.ngOnInit();
  //   }
  //   )

  loginUser(){
    // console.log(this.user)
    this.ls.loginUserFromRemote(this.user).subscribe(
      _data=>{
        // this.msg1='You logged in successfully';
        
        this.cartService.setEmail(this.user.email)
        alert("logged in successfully");
        console.log("Successfully");
      this.router.navigateByUrl('/userhome');
    },
      _error=>{
        this.msg='please recheck your password and emailid';
        alert("Login failed check you email or password");
        console.log("Error");
  }
    )
  }

}


