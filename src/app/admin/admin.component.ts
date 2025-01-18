import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { UserData } from '../shared/userdata';
import { PropertyData } from '../shared/property';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  value: UserData[];
  errorMessage: string;
  properties: PropertyData[];
  buyers: string[];
  sellers: string[];



  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getall()
    this.propfunc()
    this.buyersget()
    this.sellersget()
  }

  //to get all the user details when the admin monitors
  getall() {
    this.adminService.getall().subscribe(
      (success) => {
        for (let i = 0; i < success.length; i++) {
          if (success[i].name == "admin") {
            success.splice(i, 1)
          }else{
            success
          }
        }
        this.value = success
      },
      (failure) => {
        this.errorMessage = failure.error.message
      }
    )
  }

  // the admin is able to delete a user  
  delete(userId) {

    this.adminService.delete(userId).subscribe(
      (success) => {

        this.getall()
        this.propfunc()
      },
      (failure) => {
        this.errorMessage = failure.error.message
      }
    )
  }

  //to view all the properties in admin login
  propfunc() {
    this.adminService.propfunc().subscribe(
      (success) => {
        console.log(success)
        this.properties = success
      },
      (failure) => {
        this.errorMessage = failure.error.message
      }
    )
  }

  //to delete a property when the admin monitors 
  deletep(propId) {
    this.adminService.deletep(propId).subscribe(
      (success) => {

        this.propfunc()
      },
      (failure) => {
        this.errorMessage = failure.error.message
      }
    )
  }

  //to get all the buyers of the site
  buyersget() {
    this.adminService.buyersget().subscribe(
      (success) => {
        this.buyers = success
      },
      (failure) => {
        this.errorMessage = failure.error.message
      }
    )
  }

  //to get all the sellers of the site
  sellersget() {
    this.adminService.sellersget().subscribe(
      (success) => {
        this.sellers = success
      },
      (failure) => {
        this.errorMessage = failure.error.message
      }
    )
  }
}
