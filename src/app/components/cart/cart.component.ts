import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/entities/car';
import { CartItem } from 'src/app/models/entities/carItems';
import { Rental } from 'src/app/models/entities/rental';
import { RentPaymentRequest } from 'src/app/models/rent-payment-request';
import { Result } from 'src/app/models/results/result';
import { CarImagesService } from 'src/app/services/car-images.service';
import { CartService } from 'src/app/services/cart.service';
import { DateTimeService } from 'src/app/services/date-time.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  paymentForm: FormGroup;
  cartConfirmation: number = 0;
  paymentConfirmation: number;

  infoNumberOfCarsInPayment: number;
  infoNumberOfDaysInPayment: number;
  infoPaymentDate: string;
  infoPaymentId: number;
  infoAmountInPayment: number;

  constructor(
    private cartService: CartService,
    private toastrService: ToastrService,
    private carImagesService: CarImagesService,
    private dateTimeService: DateTimeService,
    private spinner: NgxSpinnerService,
    private rentalService: RentalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.resetCartScreen();
    this.getCart();
  }

  createPaymentForm() {
    this.paymentForm = this.formBuilder.group({
      cardHolderFullName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(19),
        ],
      ],
      expireYear: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      ],
      expireMonth: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
      ],
      cvc: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
    });
  }

  rent() {
    if (this.paymentForm.valid) {
      this.spinner.show();
      let rentRequest: RentPaymentRequest = Object.assign(
        {},
        this.paymentForm.value
      );
      rentRequest.amount = this.calculateTotalAmount();
      rentRequest.customerId = 1;
      rentRequest.rentals = this.createRentals();
      this.rentalService.rent(rentRequest).subscribe(
        (response) => {
          this.toastrService.success(response.message, '??deme ba??ar??l??');
          this.paymentConfirmation = 1;
          //Set infos
          this.infoNumberOfCarsInPayment = this.cartItems.length;
          this.infoNumberOfDaysInPayment = this.calculateTotalRentalPeriod();
          this.infoAmountInPayment = this.calculateTotalAmount();
          this.infoPaymentDate = this.dateTimeService.getFullDateTimeNow();
          this.infoPaymentId = response.data;
          //Reset cart
          this.clearCart();
          this.cartConfirmation = 0;
          this.paymentForm = undefined!;
          this.spinner.hide();
        },
        (error) => {
          this.toastrService.error(error.error.message, '??deme ba??ar??s??z');
          this.paymentForm.reset();
          this.spinner.hide();
        }
      );
    } else {
      this.toastrService.error(
        'L??tfen kart bilgilerinizi eksiksiz doldurunuz',
        'Kart bilgileri eksik'
      );
    }
  }

  resetCartScreen() {
    this.paymentForm = undefined!;
    this.cartConfirmation = 0;
    this.paymentConfirmation = undefined!;
    this.infoNumberOfCarsInPayment = undefined!;
    this.infoNumberOfDaysInPayment = undefined!;
    this.infoAmountInPayment = undefined!;
    this.infoPaymentDate = undefined!;
    this.infoPaymentId = undefined!;
  }

  createRentals(): Rental[] {
    let rentals: Rental[] = [];
    this.cartItems.forEach((cartItem) => {
      let rental: Rental = new Rental();
      rental.carId = cartItem.car.id;
      rental.customerId = 1;
      rental.rentDate = cartItem.rentDate;
      rental.returnDate = cartItem.returnDate;
      rentals.push(rental);
    });
    return rentals;
  }

  unconfirmCart() {
    this.cartConfirmation = 0;
  }

  confirmCart() {
    this.cartConfirmation = 1;
  }

  calculateTotalAmount(): number {
    let totalAmount: number = 0;
    this.cartItems.forEach((cartItem) => {
      let rentalPeriod = this.getRentalPeriod(
        cartItem.rentDate,
        cartItem.returnDate
      );
      let amount = cartItem.car.dailyPrice * rentalPeriod;
      totalAmount += amount;
    });
    return totalAmount;
  }

  calculateTotalRentalPeriod(): number {
    let totalRentalPeriod: number = 0;
    this.cartItems.forEach((cartItem) => {
      let rentalPeriod: number = this.getRentalPeriod(
        cartItem.rentDate,
        cartItem.returnDate
      );
      totalRentalPeriod += rentalPeriod;
    });
    return totalRentalPeriod;
  }

  getRentalPeriod(rentDate: Date, returnDate: Date): number {
    return this.dateTimeService.getRentalPeriod(rentDate, returnDate);
  }

  formatDate(date: Date): string {
    return this.dateTimeService.formatDate(date);
  }

  showDate(date: Date) {
    return this.dateTimeService.showDate(date);
  }

  getImagePath(imagePath: string) {
    return this.carImagesService.getImagePath(imagePath);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeFromCart(car: Car) {
    let result: Result = this.cartService.removeFromCart(car);
    if (result.success) {
      this.toastrService.success(
        result.message,
        car.brandName + ' ' + car.modelName
      );
    } else {
      this.toastrService.error(
        result.message,
        car.brandName + ' ' + car.modelName
      );
    }
  }

  getCart() {
    this.cartItems = this.cartService.listOfCart();
  }
}
