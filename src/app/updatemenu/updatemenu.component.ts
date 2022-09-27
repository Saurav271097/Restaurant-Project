import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Menu } from '../menu';


@Component({
  selector: 'app-updatemenu',
  templateUrl: './updatemenu.component.html',
  styleUrls: ['./updatemenu.component.css']
})
export class UpdatemenuComponent implements OnInit {

  menu: Menu = new Menu();
  id1!:number;
  id!: number;
  
  constructor(private router:Router, private route:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];

    this.id=this.cartService.getId();
    this.cartService.getMenuById(this.id).subscribe(data => {
      console.log(this.id)
      this.menu = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.cartService.updateMenu(this.id, this.menu).subscribe( data =>{
      this.goToMenuList();
    }
    , error => console.log(error));
  }

  goToMenuList(){
    this.router.navigate(['/adminmenulist']);
  }

}
