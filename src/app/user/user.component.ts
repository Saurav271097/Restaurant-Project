import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password:string='';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goToPage(signup:String){
    this.router.navigate([`${signup}`]);
  }
  goToUser(userpage:String){
    this.router.navigate([`${userpage}`]);
  }

  // userLogin(userdata:any){
  //   this.
  // }

}
