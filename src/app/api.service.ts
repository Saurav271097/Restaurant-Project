import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
    
  getProduct(){
    return this.http.get<any>("http://localhost:8080/view") 
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  usersList(){
    return this.http.get<any>("http://localhost:8080/showUser") 
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUserCart(){
    return this.http.get<any>("http://localhost:8080/showCart")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  bookShow(){
    return this.http.get<any>("http://localhost:8080/viewbook") 
    .pipe(map((res:any)=>{
      return res;
    }))

}

viewfeedback(){
  return this.http.get<any>("http://localhost:8080/viewfeedback") 
  .pipe(map((res:any)=>{
    return res;
  }))
}

viewPayments(){
  return this.http.get<any>("http://localhost:8080/showpayment") 
  .pipe(map((res:any)=>{
    return res;
  }))
}


}
// https://fakestoreapi.com/products/
// http://127.0.0.1:5500/ResturantProject/src/menu.html
// http://localhost:8080/view
// http://127.0.0.1:5500/src/menu.html