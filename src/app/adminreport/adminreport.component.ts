import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-adminreport',
  templateUrl: './adminreport.component.html',
  styleUrls: ['./adminreport.component.css']
})
export class AdminreportComponent implements OnInit {
  adminGotProductList: any;

  constructor(private api: ApiService, private cartService:CartService) { }

  ngOnInit(): void {
      this.api.getUserCart().subscribe(res=>{
        this.adminGotProductList=res;
        // console.log(this.adminGotProductList)
        // this.adminGotProductList.froEach((a:any)=>{
        //   Object.assign(a,{quantity:1,total:a.price})
        // });
      });
    }
    some:any=0;
    viewMenu(data:number){
      this.cartService.viewOneMenu(data).subscribe((res:any)=>{
        this.some=res;
      })
    }
  }
  

