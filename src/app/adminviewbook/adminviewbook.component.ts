import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminviewbook',
  templateUrl: './adminviewbook.component.html',
  styleUrls: ['./adminviewbook.component.css']
})
export class AdminviewbookComponent implements OnInit {

  a:any;
booktable:any;
  constructor(private api: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.api.bookShow()
    .subscribe(res=>{
      this.booktable=res; 

    this.booktable.forEach((a:any) => {
      Object.assign(a);   
    });
    })
  }
}
