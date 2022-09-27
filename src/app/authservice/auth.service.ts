import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl:string ='';
  signupUrl:string='';


  constructor(private http : HttpClient) { 

    this.loginUrl="http://localhost:8080/login"
    this.signupUrl="http://localhost:8080/regi"
  }

  Login(user: User) : Observable<any>{  
    return this.http.post<any>(this.loginUrl,user);
  }

  signUp(user : User): Observable<any>{
    return this.http.post<any>(this.signupUrl,user);
  }
}
