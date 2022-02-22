import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterCarModelPipePipe } from './pipes/filter-car-model-pipe.pipe';

import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandAddComponent } from './components/admin/admin-brand-add/admin-brand-add.component';
import { BrandDeleteComponent } from './components/admin/admin-brand-delete/admin-brand-delete.component';
import { BrandManagerComponent } from './components/admin/admin-brand-manager/admin-brand-manager.component';
import { BrandUpdateComponent } from './components/admin/admin-brand-update/admin-brand-update.component';
import { CarAddComponent } from './components/admin/admin-car-add/admin-car-add.component';
import { CarDeleteComponent } from './components/admin/admin-car-delete/admin-car-delete.component';
import { CarManagerComponent } from './components/admin/admin-car-manager/admin-car-manager.component';
import { CarUpdateComponent } from './components/admin/admin-car-update/admin-car-update.component';
import { ColorAddComponent } from './components/admin/admin-color-add/admin-color-add.component';
import { ColorDeleteComponent } from './components/admin/admin-color-delete/admin-color-delete.component';
import { ColorManagerComponent } from './components/admin/admin-color-manager/admin-color-manager.component';
import { ColorUpdateComponent } from './components/admin/admin-color-update/admin-color-update.component';
import { LoginComponent } from './components/account/account-login/account-login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/account/account-register/account-register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AccountHomeComponent } from './components/account/account-home/account-home.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    RentalComponent,
    CarDetailsComponent,
    FilterBrandPipePipe,
    FilterColorPipePipe,
    FilterCarModelPipePipe,
    CartSummaryComponent,
    CartComponent,
    BrandAddComponent,
    BrandDeleteComponent,
    BrandManagerComponent,
    BrandUpdateComponent,
    CarAddComponent,
    CarDeleteComponent,
    CarManagerComponent,
    CarUpdateComponent,
    ColorAddComponent,
    ColorDeleteComponent,
    ColorManagerComponent,
    ColorUpdateComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AccountHomeComponent,
    AdminHomeComponent,
    FooterComponent,
    HomeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
