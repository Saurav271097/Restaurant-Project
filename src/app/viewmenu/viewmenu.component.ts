import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.css']
})
export class ViewmenuComponent implements OnInit {

  mid!: number;
  menu!: Menu;
  id!: number;

  constructor(private route:ActivatedRoute, private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.cartService.getId();
    this.menu = new Menu();
    this.cartService.getMenuById(this.id).subscribe( data => {
      this.menu = data;
    });
  }

  goBack(){
    this.router.navigateByUrl("/adminmenulist")
  }

}
