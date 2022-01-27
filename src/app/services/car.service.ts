import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/entities/car';
import { ListResponseModel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44313/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarswithdetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number) {
    let newPath =
      this.apiUrl + 'cars/getcarsbybrandidwithdetails?brandid=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number) {
    let newPath =
      this.apiUrl + 'cars/getcarsbycoloridwithdetails?colorid=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
