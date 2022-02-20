import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandManagerComponent } from './components/brand-manager/brand-manager.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { CarManagerComponent } from './components/car-manager/car-manager.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorManagerComponent } from './components/color-manager/color-manager.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
