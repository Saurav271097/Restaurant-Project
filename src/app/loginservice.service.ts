import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';
 
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  url1="http://localhost:8080/insert" 
  url2="http://localhost:8080/loginemail"
  url3="http://localhost:8080/book"
  url4="http://localhost:8080/adminlogin"

  signupservice1(data1:any){
    return this.http.post(this.url1, data1);
  }

  loginservice1(data2:any){
    return this.http.post(this.url2 , data2);
  }

  bookservice1(data3:any){
    return this.http.post(this.url3 , data3);
  }

  public loginUserFromRemote(user:User):Observable<object>{
    // console.log(user);
    return this.http.post(this.url2,user);
  }

  public adminUserService(user:User):Observable<object>{
    // console.log(user);
    return this.http.post(this.url4,user);
  }

}
