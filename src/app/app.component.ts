import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FA4UI';
  isShown: boolean = false
  module = true;
  userLoggedIn;
  userName
  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isShown = false;
    this.userName = sessionStorage.getItem('name')
    console.log(sessionStorage.getItem('name'))
    if (this.userName) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;

    }
  }

  // this is executed after the user logIn
  login() {
    this.userName = sessionStorage.getItem('name');
  }

  reload(){
    this.ngOnInit()
  }

  onActivate(event) {
  }

// to signout from a profile
  signout() {
    sessionStorage.clear()
    this.ngOnInit()
    this.openSnackBar('Logged out successfully', 'OK');
    this.router.navigate(['/home'])

  }

  //to open snack bar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    });
  }

  //to open snackbar if user not logged in and tries to access profile
  viewSnack() {
    this.openSnackBar('Please login to view Profile', 'OK');
  }

  //to open snackbar if user not logged in and tries to access the wishlist page
  viewSnack1() {
    this.openSnackBar('Please login to view Wishlist page', 'OK');
  }

  //to open snackbar if user not logged in and tries to access the selling property page
  viewSnackS(){
    this.openSnackBar('Please login to view Page', 'OK');
  }
}
