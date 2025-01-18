import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';
// import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
// import { HttpClientModule } from '../../../node_modules/@angular/common/http';
// import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatSidenavModule, MatGridListModule, MatExpansionModule, MatSlideToggleModule, MatChipsModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';


import {MatListModule} from '@angular/material/list';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatTooltipModule} from '@angular/material/tooltip';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { BuyerComponent } from './buyer.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';

describe('BuyerComponent', () => {
  let component: BuyerComponent;
  let fixture: ComponentFixture<BuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerComponent ],
      imports: [MatTooltipModule,MatSliderModule,MatMenuModule,MatListModule, MatAutocompleteModule,
        MatIconModule, ScrollingModule, MatChipsModule, MatSlideToggleModule, MatExpansionModule,
         MatGridListModule, MatButtonToggleModule, MatSidenavModule, MatTabsModule, MatDividerModule, 
         MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule,
          MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, 
          MatSortModule, MatTableModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
           MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule,
           BrowserAnimationsModule,RouterTestingModule,HttpClientModule,ReactiveFormsModule,FormsModule,RouterModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
