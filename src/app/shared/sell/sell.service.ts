import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PropertyData } from '../property';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  sellURL="http://localhost:3000/user/sell/"
  roleurl="http://localhost:3000/user/role/"
  constructor(private http:HttpClient) { }

  //to add a new property for sale or rent
  sellProperty(data:any):Observable<any>{
    let userId=sessionStorage.getItem("userId")
    return <Observable<any>>this.http.post(this.sellURL+userId,data);

  }
  //to post the userId as a seller
  roleput(userId):Observable<any>{
    return <Observable<any>> this.http.get(this.roleurl+userId)
  }
}
