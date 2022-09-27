import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { User } from '../user';

@Component({
  selector: 'app-userchefs',
  templateUrl: './userchefs.component.html',
  styleUrls: ['./userchefs.component.css']
})
export class UserchefsComponent implements OnInit {

  public totalItem : number=0;
  user : User = new User();
  fname = this.user.firstname;
  constructor(public cartService:CartService, private router : Router){ }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })

  }

}
