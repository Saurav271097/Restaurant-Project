import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  public products:any=[];
  public grandTotal!:number;
  
  public totalItem : number=0;
  public item1: any;
  email: any;
  amount!: number;
  
  constructor(private cartService: CartService, private router : Router) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
      this.item1=this.cartService.cartItemList;
    })

    this.cartService.getProduct().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice();
      this.amount=this.grandTotal;

    })
    this.email=this.cartService.getEmail();
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }

  payment(){
    this.cartService.addAllcart(this.item1).subscribe();
    this.cartService.setAmount(this.amount);
   console.log(this.item1);
    this.router.navigateByUrl('/payment');
  }
}
