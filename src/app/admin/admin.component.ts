import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user : User = new User();
  msg:string='';
  
  
  constructor(private router:Router, private ls:LoginserviceService ) { }

  ngOnInit(): void {
  }

  // goToAdmin(adminpage:String){
  //   this.router.navigate([`${adminpage}`]);
  // }

  insertData(){
    console.log(this.user)
    this.ls.adminUserService(this.user).subscribe(
      _data=>{
        // this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successfully");
      this.router.navigateByUrl('/adminhome');
    },
      _error=>{
        this.msg='please recheck your password and emailid';
        alert("Login failed please check email and password");
        console.log("Error");
  }
    )
  }

}