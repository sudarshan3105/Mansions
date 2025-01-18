import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  registerurl = "http://localhost:3000/user/register"
  constructor(private http:HttpClient) { }

  //to add new user details
  register(registerform):Observable<string>{
    return  <Observable<string>> this.http.post(this.registerurl,registerform)
  }
}
