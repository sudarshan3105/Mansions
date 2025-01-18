import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component'
import { BuyerComponent } from './shared/buyer/buyer.component';
import { SellComponent } from './shared/sell/sell.component';
import { AdminComponent } from './admin/admin.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { GuardService } from './guard.service';
import { GuardadminService } from './guardadmin.service';
import { WishlistComponent } from './shared/wishlist/wishlist.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';



const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [GuardadminService]
  },
  {
    path: "profile",
    component: SellerprofileComponent,
    canActivate: [GuardService]
  },
  {

    path: "buy",
    component: BuyerComponent
  },
  {

    path: "buy/:v",
    component: BuyerComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [GuardService]

  },
  {
    path: 'sell',
    component: SellComponent,
    canActivate: [GuardService]
  },
  {
    path: 'buy/:location',
    component: BuyerComponent
  },
{
  path:'wishlist',
  component:WishlistComponent
},
  {
    path: 'update',
    component: UpdateprofileComponent,
    canActivate: [GuardService]
  },
  {
    path: "**",
    component: SearchComponent
  },
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
