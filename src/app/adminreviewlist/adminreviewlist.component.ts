import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-adminreviewlist',
  templateUrl: './adminreviewlist.component.html',
  styleUrls: ['./adminreviewlist.component.css']
})
export class AdminreviewlistComponent implements OnInit {

  reviews:any;
  constructor(private router:Router, private api:ApiService,private rs:CartService) { }

  ngOnInit(): void {
    this.api.viewfeedback()
    .subscribe(res=>{
      this.reviews=res; 

    this.reviews.forEach((a:any) => {
      Object.assign(a);   
    });
    })
  }

  deleteFeedback(data:number){
    this.rs.deleteFeed(data).subscribe(data=>{
      console.log(data)
      alert("You have Deleted Menu Item Successfully")
      window.location.reload();
    })
    }

}
