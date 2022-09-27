import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';

@Component({
  selector: 'app-userbooktable',
  templateUrl: './userbooktable.component.html',
  styleUrls: ['./userbooktable.component.css']
})
export class UserbooktableComponent implements OnInit {

  public totalItem : number=0;
  constructor(public cartService:CartService, private router : Router,private ls:LoginserviceService) { }

  user : User = new User();
  fname = this.user.firstname;
  rateInput:number = 0;

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  bookTable(book:any){
    this.ls.bookservice1(book.value).subscribe();
    alert("You table is Booked");
    this.router.navigateByUrl("/login");
  }


}
