import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

import { Router } from '@angular/router';
import { AuthService } from '../authservice/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: string ='';
  lastname: string = '';
  email: string = '';
  password: string = '';
  
  user : User = new User();

  constructor(private ls: LoginserviceService, public router:Router, private authService:AuthService) { }
  

  ngOnInit(): void {
    this.firstname='';
    this.lastname='';
    this.email='';
    this.password='';
  }

  insertSignup(signupdata:any){
    this.ls.signupservice1(signupdata.value).subscribe();
    alert("You have SignUp SuccessFully");
    window.location.href='/login';
  }

  signup(){
    this.user.firstname = this.firstname;
    this.user.lastname = this.lastname;
    this.user.email = this.email;
    this.user.password = this.password;

    this.authService.signUp(this.user).subscribe(res => {
      if(res==null){
        alert("Registration Failed.");
        this.ngOnInit();
      }
      else{
        alert("Registration Successfull");
        this.router.navigate(['/login']);
      }

    },err =>{
      alert("Registration is failed.");
      this.ngOnInit();
    }
    )
  }

}
// function res(_res: any, _arg1: (any: any) => void, _arg2: (err: any) => void) {
//   throw new Error('Function not implemented.');
// }

