import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TitleStrategy } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { Menu } from './menu';


@Injectable({
  providedIn: 'root'
})


export class CartService {
  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);

  public search=new BehaviorSubject<string>("");

  email: any;
  amount: any;
  date!: String;
  id!: number;
  // public search = new BehaviorSubject<string>("");
  
  constructor(private http: HttpClient) { }
  url4="http://localhost:8080/menu" 
  url5="http://localhost:8080/adminmenu"
  url6="http://localhost:8080/cart"
  url7="http://localhost:8080/find"
  url8="http://localhost:8080/paymentsave"
  url9="http://localhost:8080/deletemenu"
  url10="http://localhost:8080/deleteproduct"
  url11="http://localhost:8080/search"
  url12="http://localhost:8080/updatemenu"
  url14="http://localhost:8080/savefeedback"
  url15="http://localhost:8080/deletefeedback"

  getProduct(){
   return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
  addToCart(product:any){

    product.email=this.email;
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();

    console.log(this.email)
    console.log(product.email)
    console.log(product)

    // console.log(product)
    console.log(this.cartItemList)
    return this.http.post("http://localhost:8080/cart",product)
    
    // return this.http.post(this.url4, product);
  }
  getTotalPrice() : number {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index , 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }
  addAllcart(data: any) {
    console.log(data);
    return this.http.post<User>(this.url6,data)
  }
  
  updateProductsByAdminService(data5:any){
    console.log(data5)
    return this.http.post(this.url5,data5);
  }
  
  setEmail(data:any){
    this.email=data;
  }
  getEmail(){
    console.log(this.email);
   return this.email; 
  }

  setAmount(data:any){
    this.amount=data;
    console.log(this.amount);
  }
  getAmount(){
    console.log(this.amount);
    return this.amount; 
  }
  
  viewOneMenu(data:number) {
    return this.http.post(this.url7,data);
  }
  
  // removeAdminCartItem(product:any){
    //   this.cartItemList.map((a:any,index:any)=>{
      //     if(product.id===a.id){
        //       this.cartItemList.splice(index , 1);
        //     }
        //   })
        //   this.productList.next(this.cartItemList);
        // }
        
  paymentService(data8: any) {
    data8.email = this.email;
    data8.date = this.date;
    data8.grandTotal = this.amount;
    return this.http.post(this.url8, data8);
  }
  
  deleteOne(data9:any){
      console.log(data9)
      return this.http.post("",data9);
    }
    
    setDate(date:String){
      this.date=date;
    }

    getMenuById(id: number): Observable<Menu>{
      return this.http.get<Menu>(`${this.url11}/${id}`);
    }

    updateMenu(mid: number, menu: Menu): Observable<Object>{
      return this.http.put(`${this.url12}/${mid}`, menu);
    }

    deleteMenu(mid: number): Observable<Object>{
      console.log(mid)
      return this.http.delete(`${this.url10}/${mid}`);
    }

    setId(id:number){
      this.id=id;
    }
    getId(){
      return this.id;
    }

    savefeedback(data14: any) {
      return this.http.post(this.url14,data14);
    }

    deleteFeed(id: number): Observable<Object>{
      console.log(id)
      return this.http.delete(`${this.url15}/${id}`);
    }
}
      
      
      