import { Injectable } from '@angular/core';

import { PropertyData } from '../property';
import { UserData } from '../userdata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../location';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  url1 = 'http://localhost:3000/user/buy'
  url2 = 'http://localhost:3000/user/view/'
  url3 = 'http://localhost:3000/user/get'
  url4 = 'http://localhost:3000/user/search'
  url5 = "http://localhost:3000/user/update/"
  url = "http://localhost:3000/user/wishlist/"

  constructor(private http: HttpClient) { }
//to get all property data
  buy():Observable<PropertyData[]>{
    return <Observable<PropertyData[]>> this.http.get(this.url1);
  }
  //to get the property data of the specified property Id
  view(propertyId):Observable<PropertyData[]>{
    return <Observable<PropertyData[]>> this.http.get(this.url2+propertyId);
  }
  //to get all the user data
  getuserdata():Observable<UserData[]>{
    return <Observable<UserData[]>> this.http.get(this.url3);
  }
  //to get the location array
  property_location():Observable<Location[]>{
    return <Observable<Location[]>> this.http.get(this.url4)
  }

  //to add to wishlist
  checkWish(uid, pid, state): Observable<any> {
    console.log(this.url5 + uid + "/" + pid + "/" + state)
    return <Observable<any>>this.http.get(this.url5 + uid + "/" + pid + "/" + state)
  }
  //to access the wishlisted property
  wish(userId):Observable<PropertyData[]>{
    return <Observable<PropertyData[]>> this.http.get(this.url+userId)
  }
}

