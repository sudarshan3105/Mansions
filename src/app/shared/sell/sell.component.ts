import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Location } from '@angular/common'
import { SellService } from '../sell/sell.service'

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})

export class SellComponent implements OnInit {
  sellForm: FormGroup;
  successMessage: string;
  userId: string;
  errorMessage: String;
  sellForm1: FormGroup;
  sellForm2: FormGroup;
  sellForm3: FormGroup;
  areaArray = ["Mandimohalla", "Mysore", "Krishna Rajendra Circle", "Vani Vilas Mohalla", "Gokulam", "Mandi", "Siddhalingapura"]
  pincodeArray = [57001, 57002, 57003, 57004, 57005, 57006]
  ownershipArray = ["Owner", "Dealer", "Broker"]
  next = false;
  selectedIndex: number = 0;

  //for price slider
  formatPriceLabel(value: number) {
    if (value > 10000) {
      return Math.round(value / 10000) + 'k';
    }
    return value
  }
  // for age slider
  formAgeLabel(value: number) {
    if (value > 1) {
      return value
    }
    return value + "years old property"
  }
  //for area slider
  formAreaLabel(value: number) {
    if (value > 1) {
      return value
    }
    return value + "sq.feets"
  }

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private location: Location, private sellService: SellService, private app: AppComponent) {
    sessionStorage.setItem("PreviousUrl", sessionStorage.getItem("CurrentUrl"));
    sessionStorage.setItem("CurrentUrl", this.router.url);
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.sellForm = this.fb.group(
      {
        area: ['', Validators.required],
        pincode: ['', Validators.required],
        buildingType: ['', Validators.required],
        propertyOwnership: ['', Validators.required],
        noOfBalconies: ['', Validators.required],
        noOfBedrooms: ['', Validators.required],
        noOfBathrooms: ['', Validators.required],
        price: ['', Validators.required],

        propertyType: ['', Validators.required],


      }
    )
    this.sellForm1 = this.fb.group({
      transactionType: [''],
      ageOfProperty: [''],
      availabilityBy: [''],
      availability: [''],
      furnishing: [''],
      noOfOpenParking: [''],
      noOfCoveredParking: [''],
      propertyArea: [''],
      imageUrls: [''],
      extras: ['']

    })
    this.sellForm2 = this.fb.group({
      lifts: false,
      ac: false,
      heater: false,
      wifi: false,
      waterPurifier: false,
      WaterPurifier: false,
      maintenenceStaff: false,

      visitorParking: false,
      powerBackup: false,
      PowerBackup: false,
      fireAlarm: false,
      WaterSupplyFor24Hours: false,
      CloseToSchool: false,
      CloseToHospital: false,
      CloseToRailwayStation: false,
      CloseToBusStand: false,
      CloseToAirport: false,
      CloseToBank: false,
      CloseToPark: false
    })
    this.sellForm3 = this.fb.group({
      Address: [''],
      description: ['']
    })

  }
  // to open snackbar after the property is added successfully
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    })
  }


  // on click of post the user is added to the sellers array
  roleput() {
    this.userId = sessionStorage.getItem('userId')
    this.sellService.roleput(this.userId).subscribe(
      (success) => {
      },
      (failure) => {
        this.errorMessage = failure.error.message
      }
    )
  }

  //for spinner to indicate the form completion
  color = 'primary';
  mode = 'determinate';
  value = 0
  flag1 = 0;
  flag2 = 0;
  flag3 = 0;
  flag4 = 0;
  flag5 = 0;
  flag6 = 0;
  flag7 = 0;
  flag8 = 0;
  flag9 = 0;

  spinnerVal() {
    if (this.sellForm.controls.area.valid) {
      if (this.flag1 == 0) {
        this.value += 10
        this.flag1 = 1
      }
    }


    if (this.sellForm.controls.pincode.valid) {
      if (this.flag2 == 0) {
        this.value += 10
        this.flag2 = 1
      }
    }


    if (this.sellForm.controls.propertyOwnership.valid) {
      if (this.flag3 == 0) {
        this.value += 10
        this.flag3 = 1
      }
    }


    if (this.sellForm.controls.propertyType.valid) {
      if (this.flag4 == 0) {
        this.value += 10
        this.flag4 = 1
      }
    }


    if (this.sellForm.controls.buildingType.valid) {
      if (this.flag5 == 0) {
        this.value += 20
        this.flag5 = 1
      }
    }


    if (this.sellForm.controls.noOfBedrooms.valid) {
      if (this.flag6 == 0) {
        this.value += 20
        this.flag6 = 1
      }
    }


    if (this.sellForm.controls.noOfBathrooms.valid) {
      if (this.flag7 == 0) {
        this.value += 10
        this.flag7 = 1
      }
    }
    if (this.sellForm.controls.price.valid) {
      if (this.flag8 == 0) {
        this.value += 10
        this.flag8 = 1
      }
    }
  }


  // to add a new property for sale/rent
  sell() {
    if (!this.next) {
      this.sellService.sellProperty(this.sellForm.value).subscribe(
        (response) => {
          sessionStorage.setItem("area", response.area)
          sessionStorage.setItem("pincode", response.pincode)
          this.openSnackBar('Property added successfully', 'ok')

          if (this.sellForm.value) {
            this.router.navigate(['/buy'])
          }
          this.errorMessage = null
          this.app.reload()
        },
        (errorResponse) => {
          this.errorMessage = errorResponse.error.message
          sessionStorage.clear()
        }
      )
    } else {
      let newObj = {
        area: this.sellForm.value.area,
        pincode: this.sellForm.value.pincode,
        propertyType: this.sellForm.value.propertyType,
        propertyOwnership: this.sellForm.value.propertyOwnership,
        buildingType: this.sellForm.value.buildingType,
        noOfBathrooms: this.sellForm.value.noOfBathrooms,
        noOfBedrooms: this.sellForm.value.noOfBedrooms,
        noOfBalconies: this.sellForm.value.noOfBalconies,
        price: this.sellForm.value.price,
        furnishing: this.sellForm1.value.furnishing,
        availability: this.sellForm1.value.availability,
        lifts: this.sellForm2.value.lifts,
        ac: this.sellForm2.value.ac,
        heater: this.sellForm2.value.heater,
        maintenenceStaff: this.sellForm2.value.maintenenceStaff,
        wifi: this.sellForm2.value.wifi,
        fireAlarm: this.sellForm2.value.fireAlarm,
        WaterSupplyFor24Hours: this.sellForm2.value.WaterSupplyFor24Hours,
        PowerBackup: this.sellForm2.value.PowerBackup,
        WaterPurifier: this.sellForm2.value.WaterPurifier,
        CloseToSchool: this.sellForm2.value.CloseToSchool,
        CloseToHospital: this.sellForm2.value.CloseToHospital,
        CloseToRailwayStation: this.sellForm2.value.CloseToRailwayStation,
        CloseToBusStand: this.sellForm2.value.CloseToBusStand,
        CloseToAirport: this.sellForm2.value.CloseToAirport,
        CloseToBank: this.sellForm2.value.CloseToBank,
        CloseToPark: this.sellForm2.value.CloseToPark,
        status: this.sellForm1.value.status,
        Address: this.sellForm3.value.Address,
        transactionType: this.sellForm1.value.transactionType,
        ageOfProperty: this.sellForm1.value.ageOfProperty,
        propertyArea: this.sellForm1.value.propertyArea,
        noOfCoveredParking: this.sellForm1.value.noOfCoveredParking,
        noOfOpenParking: this.sellForm1.value.noOfOpenParking,
        description: this.sellForm3.value.description,
      }
      this.sellService.sellProperty(newObj).subscribe(
        (response) => {
          sessionStorage.setItem("area", response.area);
          sessionStorage.setItem("pincode", response.pincode);

          this.openSnackBar('Property added successfully', 'ok');

          if (this.sellForm.value) {
            this.router.navigate(['/buy'])
          }
          this.errorMessage = null
          this.app.reload()
        },
        (errorResponse) => {

          this.errorMessage = errorResponse.error.message
        }
      )
    }
  }
  //to direct to next tab on click of next button
  nextStep() {
    if (this.selectedIndex != 4) {
      this.selectedIndex = this.selectedIndex + 1;
    }
    this.next = true
  }
}