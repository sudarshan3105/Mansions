import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { MatSnackBar } from '../../../node_modules/@angular/material';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  errorMessage: string;
  registerForm: FormGroup;
  show: true;
  name: string;
  emailId: string;
  contactNo: number;
  password: string;

  constructor(private fb: FormBuilder, private mailService: RegisterService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    
    document.getElementsByTagName('div')[0].focus();
    this.registerForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+( )*[a-zA-Z]*( )*[a-zA-Z]+$/)]],
      emailId:['',[Validators.required,Validators.pattern(/^[a-z]+[0-9]*@[a-z]+\.([a-z]{2,3})(\.){0,1}([a-z]{0,2})$/)]],    
      contactNo:['',[Validators.required,Validators.pattern(/^[6-9][0-9]{9}$/)]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,20}$/)]]     
    })
  }

  //to open snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    });
  }

  // registers a new user and correspondingly data is added to database
  register() {
    this.mailService.register(this.registerForm.value).subscribe(
      (success) => {
        this.openSnackBar('Registered successfully. Please Login to continue', 'OK');
        this.router.navigate(['/home'])
        this.errorMessage = null;
      },
      (failure) => {
        this.errorMessage = failure.error.message
      }
    )
  }

}
