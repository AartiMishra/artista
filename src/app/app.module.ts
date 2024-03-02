import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeComponent } from './home/home.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MidPageComponent } from './mid-page/mid-page.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './authentication/auth-interceptor.service';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { OrdersComponent } from './myaccount/orders/orders.component';
import { AddressesComponent } from './myaccount/addresses/addresses.component';
import { AccountSettingsComponent } from './myaccount/account-settings/account-settings.component';
import { DrawingMenuComponent } from './drawing-menu/drawing-menu.component';
// import { DrawingMenuComponent } from './drawing-menu/drawing-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeTopComponent,
    HomeComponent,
    HomeAboutComponent,
    FooterComponent,
    LoginComponent,
    MidPageComponent,
    SignupComponent,
    MyaccountComponent,
    OrdersComponent,
    AddressesComponent,
    AccountSettingsComponent,
    DrawingMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
