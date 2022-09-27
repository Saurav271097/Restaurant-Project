import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { User } from '../user';

@Component({
  selector: 'app-userreviews',
  templateUrl: './userreviews.component.html',
  styleUrls: ['./userreviews.component.css']
})
export class UserreviewsComponent implements OnInit {

  public totalItem : number=0;
  user : User = new User();
  reviews:any;
  fname = this.user.firstname;
  constructor(public cartService:CartService, private router : Router,public route: ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })

    this.api.viewfeedback()
    .subscribe(res=>{
      this.reviews=res; 

    this.reviews.forEach((a:any) => {
      Object.assign(a);   
    });
    })

  }
  savedata(review:any){
    this.cartService.savefeedback(review.value).subscribe();
  }
  getreview(){
    alert("Thank you for Your Valuable Feedback");
    window.location.reload();
  }

}
