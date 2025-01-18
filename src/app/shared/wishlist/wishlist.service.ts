import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { UserData } from '../userdata';
import { PropertyData } from '../property';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
url="http://localhost:3000/user/wishlist/"
url2='http://localhost:3000/user/get'
url3='http://localhost:3000/user/view/'


  constructor(private http:HttpClient) { }

  //to access the wishlisted properties
  wishlist(userId):Observable<PropertyData[]>{
    return this.http.get<PropertyData[]>(this.url+userId)
  }
  
  //to get the owner details on click of button
  getuserdata():Observable<any>{
    return <Observable<any>> this.http.get(this.url2);
  }

  //to get the property details
  view(propertyId):Observable<any>{
    return <Observable<any>> this.http.get(this.url3+propertyId);
  }
}
