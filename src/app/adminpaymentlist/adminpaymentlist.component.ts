import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-adminpaymentlist',
  templateUrl: './adminpaymentlist.component.html',
  styleUrls: ['./adminpaymentlist.component.css']
})
export class AdminpaymentlistComponent implements OnInit {
  paymentList: any;
  searchTerm: any;
  filterCategory: any;
  searchKey:any;

  constructor(private router:Router,private api:ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.viewPayments()
    .subscribe(res=>{
      this.paymentList=res; 
      this.filterCategory=res;

    this.paymentList.forEach((a:any) => {
      Object.assign(a);   
    });
    })

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })

  }


  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm)
  }

}
