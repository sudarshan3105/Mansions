import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateprofileService {

  updateurl = "http://localhost:3000/user/update_profile/"
  constructor(private http:HttpClient) { }
  //to update profile of user
  update_profile(updateform,userId):Observable<any>{
    return  <Observable<any>> this.http.put(this.updateurl+userId,updateform)
  }
}
