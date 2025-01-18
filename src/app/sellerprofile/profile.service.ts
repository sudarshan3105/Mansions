import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../shared/userdata';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
url="http://localhost:3000/user/profile/"
  constructor(private http:HttpClient) { }
  data(userId):Observable<UserData[]>{
    return this.http.get<UserData[]>(this.url+userId)
  }

}
