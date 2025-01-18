import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../shared/location';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
  searchURL="http://localhost:3000/user/search";
  constructor(private http:HttpClient) { }
  
  //to get the location array
  search(): Observable<Location[]> {
    return <Observable<Location[]>> this.http.get(this.searchURL);
  }

}
