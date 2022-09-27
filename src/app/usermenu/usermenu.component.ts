import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { User } from '../user';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  public totalItem : number=0;

  public productList:any;
  constructor(private api : ApiService, private cartService : CartService) { }

  user : User = new User();
  fname = this.user.firstname;

  ngOnInit(): void {

    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })
    
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res; 

    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});   
    });
    })
  }

  addtocart(item:any){
    this.cartService.addToCart(item);
  }


}
