import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-admincartlist',
  templateUrl: './admincartlist.component.html',
  styleUrls: ['./admincartlist.component.css']
})
export class AdmincartlistComponent implements OnInit {
  adminGotProductList: any;
  searchTerm: any;
  searchKey: any;
  filterCategory: any;

  constructor(private api: ApiService, private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getUserCart().subscribe(res=>{
      this.adminGotProductList=res;
      this.filterCategory=res;
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
