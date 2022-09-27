import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResturantProject';
  constructor( private location: LocationStrategy){  
    // preventing back button in browser implemented by "Samba Siva"  
     history.pushState(null, "#", window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, "#", window.location.href);
    });
}

}