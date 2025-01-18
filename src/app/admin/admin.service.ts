import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../shared/userdata';
import { PropertyData } from '../shared/property';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  getallurl="http://localhost:3000/user/get"
  deleteurl="http://localhost:3000/user/delete/"
  propurl="http://localhost:3000/user/buy"
  delurl="http://localhost:3000/user/deletep/"
  buyerUrl="http://localhost:3000/user/buyers"
  sellerUrl="http://localhost:3000/user/sellers"

  constructor(private http:HttpClient) { }

  //to get all the registered users
  getall():Observable<UserData[]>{
    return this.http.get<UserData[]>(this.getallurl)
  }

  //to delete a user
  delete(userId): Observable<any> {
    return this.http.delete<any>(this.deleteurl + userId)
  }

  //to get property array
  propfunc():Observable<PropertyData[]>{
    return this.http.get<PropertyData[]>(this.propurl)
  }

  //to delete a property
  deletep(propId): Observable<any> {
    return this.http.delete<any>(this.delurl + propId)
  }

  //to get the available buyers
  buyersget():Observable<string[]>{
    return this.http.get<string[]>(this.buyerUrl)
  }
  
  //to get all the sellers
  sellersget():Observable<string[]>{
    return this.http.get<string[]>(this.sellerUrl)
  }
}
