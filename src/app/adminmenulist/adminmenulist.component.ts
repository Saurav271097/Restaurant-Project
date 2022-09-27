import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-adminmenulist',
  templateUrl: './adminmenulist.component.html',
  styleUrls: ['./adminmenulist.component.css']
})
export class AdminmenulistComponent implements OnInit {

  productList: any;
  some: any;

  constructor(private rs :CartService,private router:Router, private api: ApiService , private cartService:CartService) { }

  ngOnInit(): void {

    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res; 

    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});   
    });
    })
    
  }
    deleteMenu(data:number){
      this.rs.deleteMenu(data).subscribe(data=>{
        console.log(data)
        alert("You have Deleted Menu Item Successfully")
        window.location.reload();
      })
      }
    


    updateMenu(id: number){
      console.log(id)
      this.cartService.setId(id);
      this.router.navigateByUrl("/updatemenu");
    }

    viewMenu(id: number){
      console.log(id)
      this.cartService.setId(id);
      this.router.navigateByUrl("/viewmenu");
    }
}