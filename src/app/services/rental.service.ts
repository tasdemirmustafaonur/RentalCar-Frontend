import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/entities/rental';
import { RentPaymentRequest } from '../models/rent-payment-request';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44313/api/';

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getdetails';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  checkIfCanCarBeRentedNow(
    carId: number
  ): Observable<SingleResponseModel<boolean>> {
    let newPath =
      this.apiUrl + 'rentals/checkifcancarberentednow?carid=' + carId;
    return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  }

  checkIfCanCarBeRentedBetweenSelectedDates(
    carId: number,
    rentDate: string,
    returnDate: string
  ): Observable<SingleResponseModel<boolean>> {
    let newPath =
      this.apiUrl +
      'rentals/checkifcancarberentedbetweenselecteddates?carid=' +
      carId +
      '&rentdate=' +
      rentDate +
      '&returndate=' +
      returnDate;
    return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  }

  rent(
    rentRequest: RentPaymentRequest
  ): Observable<SingleResponseModel<number>> {
    let newPath = this.apiUrl + 'rentals/rent';
    return this.httpClient.post<SingleResponseModel<number>>(
      newPath,
      rentRequest
    );
  }
}
