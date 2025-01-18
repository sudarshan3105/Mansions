import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';
import { MatSnackBar } from '@angular/material'

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition: 'center'
    }

    )
  }
  //guard
  canActivate() {
    let userName = sessionStorage.getItem('name');
    if (userName) {
      return true
    } else {
      this.openSnackBar('Log in to access', 'ok')
    }
  }
}
