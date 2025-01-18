import { Component, OnInit, TemplateRef } from '@angular/core';
import { WishlistService } from './wishlist.service';
import { THIS_EXPR } from '../../../../node_modules/@angular/compiler/src/output/output_ast';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { PropertyData } from '../property';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {
  wishlistArr: PropertyData[];
  userId: string;
  errorMessage: string;
  owner_name: string;
  owner_contact: number;
  owner_emailId: string;
  view: Boolean = true;
  constructor(private wishService: WishlistService, public dialog: MatDialog) { }

  ngOnInit() {
    this.wishlist()
  }

  //to obtain the wishlisted properties form the wishlist array
  wishlist() {
    this.userId = sessionStorage.getItem('userId')
    this.wishService.wishlist(this.userId).subscribe(
      (success) => {
        this.wishlistArr = success
        let len = this.wishlistArr.length
      },
      (failure) => {
        this.errorMessage = failure.error.message;


      }
    )
  }

  //to open dialog box to view owner details
  openDialog(templateref: TemplateRef<any>, property_obj: any) {

    this.wishService.getuserdata().subscribe(
      response => {

        response.forEach(element => {
          if (property_obj.sellerId == element.userId) {
            this.owner_name = element.name
            this.owner_contact = element.contactNo
            this.owner_emailId = element.emailId
          }
        });

      }
    )
    this.dialog.open(templateref);


  }

  //to get the properties added to wishlist
  redirectfunc(propertyId) {
    this.view = false
    this.wishService.view(propertyId).subscribe(
      response => {
        this.wishlistArr = response;
      }, err => this.errorMessage = err.error.message
    )
  }

  counter(i: number) {
    return new Array(i);
  }

}
