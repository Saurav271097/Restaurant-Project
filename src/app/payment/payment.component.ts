import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalItem: any;
  itemAmount: any = 0;
  email: any;

  date=new Date();
  currentYear=this.date.getUTCFullYear();
  currentMonth=this.date.getUTCMonth()+1;
  currentDay=this.date.getUTCDate();

  today:any;
  finalMonth:any;
  finaltoday:any;

  constructor(private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    console.log(this.cartService.amount);
      this.itemAmount=this.cartService.getAmount();
      console.log(this.itemAmount);

      this.email=this.cartService.getEmail();
      console.log(this.email);

      if(this.currentMonth<10){
        this.finalMonth="0"+this.currentMonth;
      }
      else{
        this.finalMonth=this.currentMonth;
      }
      if(this.currentDay<10){
        this.finaltoday="0"+this.currentDay;
      }else{
        this.finaltoday=this.currentDay;
  
  
      }
      this.today=this.currentYear+"-"+this.finalMonth+"-"+this.finaltoday;
      this.cartService.setDate(this.today);
  }
  
  pay(cash:any){
    this.cartService.paymentService(cash.value).subscribe();
    console.log(this.cartService.email);
    alert("Your Payment is Successful")
    this.router.navigateByUrl("/userhome");
  }
}
