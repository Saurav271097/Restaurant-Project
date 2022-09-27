import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {
  productList: any;

  constructor(private rs :CartService,private router:Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res; 

    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});   
    });
    })
  }

  updateProductsByAdmin(update:any){
    this.rs.updateProductsByAdminService(update.value).subscribe(data=>{
      alert("Added product is now visible to the customer")
      window.location.reload();
    });

  }
  
}
