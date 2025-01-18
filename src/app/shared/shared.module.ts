import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
// import { WishlistComponent } from './wishlist/wishlist.component';


import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { BuyerComponent } from './buyer/buyer.component';

import { SellComponent } from './sell/sell.component';
import { WishlistComponent } from './wishlist/wishlist.component';

let tobeShared =[MaterialModule]

@NgModule({
  declarations: [LoginComponent, BuyerComponent, SellComponent, WishlistComponent],

  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents:[
    LoginComponent
  ],
  providers: [],

  exports:[LoginComponent]
})
export class SharedModule { }
