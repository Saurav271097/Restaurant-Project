import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-adminuserlist',
  templateUrl: './adminuserlist.component.html',
  styleUrls: ['./adminuserlist.component.css']
})
export class AdminuserlistComponent implements OnInit {

  userList: any;

  constructor(private rs :CartService,private router:Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.usersList()
    .subscribe(res=>{
      this.userList=res; 

    this.userList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});   
    });
    })
}
}
