import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { OrdersComponent } from './myaccount/orders/orders.component';
import { AddressesComponent } from './myaccount/addresses/addresses.component';
import { AccountSettingsComponent } from './myaccount/account-settings/account-settings.component';
import { DrawingMenuComponent } from './drawing-menu/drawing-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'menu', component: DrawingMenuComponent },
  {
    path: 'account', component: MyaccountComponent, children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'addresses', component: AddressesComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: '', component: OrdersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
