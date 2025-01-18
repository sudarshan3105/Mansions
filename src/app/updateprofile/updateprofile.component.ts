import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { UpdateprofileService } from './updateprofile.service';
import { MatSnackBar } from '../../../node_modules/@angular/material';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  updateForm: FormGroup;
  contactNo: number;
  name: string;
  password: string;
  errorMessage: string;
  userId: string;
  constructor(private fb: FormBuilder, private service: UpdateprofileService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: ['', Validators.pattern(/^[a-zA-Z]+( )*[a-zA-Z]*( )*[a-zA-Z]+$/)],
      contactNo: ['', Validators.pattern(/^[0-9]{10}$/)]
    })
  }
  //opens up a snackbar on successful updation
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    });
  }
  //to update the contactno and name of  a user
  update_profile() {
    this.userId = sessionStorage.getItem('userId')
    this.service.update_profile(this.updateForm.value, this.userId).subscribe(
      (res) => {
        this.openSnackBar('Updated Successfully', 'OK');
        sessionStorage.setItem("name", this.updateForm.value.name)
        sessionStorage.setItem("contactNo", this.updateForm.value.contactNo)
        this.router.navigate(['/profile'])
        this.errorMessage = null;
      },
      (err) => {
        this.errorMessage = err.error.message
      }
    )
  }
}
