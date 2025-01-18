import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

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


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';




describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTooltipModule,MatSliderModule,MatMenuModule,MatListModule, MatAutocompleteModule,
        MatIconModule, ScrollingModule, MatChipsModule, MatSlideToggleModule, MatExpansionModule,
         MatGridListModule, MatButtonToggleModule, MatSidenavModule, MatTabsModule, MatDividerModule, 
         MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule,
          MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, 
          MatSortModule, MatTableModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
           MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule,
           BrowserAnimationsModule,RouterTestingModule,HttpClientModule,ReactiveFormsModule,FormsModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FA4UI'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FA4UI');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('FA4UI app is running!');
  // });
});
