import { Injectable } from '@angular/core';
import { MatSnackBar } from '../../node_modules/@angular/material';
import { CanActivate } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardadminService implements CanActivate {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition: 'center'
    })
  }

  canActivate() {
    let userName = sessionStorage.getItem('name');
    if (userName == 'admin') {
      return true;
    } else {
      this.openSnackBar('Log in to access', 'ok')
    }
  }
}
