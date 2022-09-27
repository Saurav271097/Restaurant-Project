import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { User } from '../user';

@Component({
  selector: 'app-userevents',
  templateUrl: './userevents.component.html',
  styleUrls: ['./userevents.component.css']
})
export class UsereventsComponent implements OnInit {
  public totalItem : number=0;
  user : User = new User();
  fname = this.user.firstname;

  constructor(public cartService:CartService, private router : Router) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
