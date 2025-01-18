import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from './searchservice.service';
import { Route } from '../../../node_modules/@angular/compiler/src/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  loc = [];
  errorMessage: string;


  constructor(private service: SearchserviceService, private router: Router) { }
  location_array = []
  ngOnInit() {

  }

  //to search location 
  search() {
    this.service.search().subscribe(
      (res) => {
        this.loc = res;
      },
      (err) => {
        this.errorMessage = err.error.message
      }
    )
  }

  //shows result of properties according to location
  show_property(location) {
    this.router.navigate(['/buy', location])
  }










}
