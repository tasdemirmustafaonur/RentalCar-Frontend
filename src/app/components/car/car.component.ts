import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/entities/brand';
import { Car } from 'src/app/models/entities/car';
import { Color } from 'src/app/models/entities/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImagesService } from 'src/app/services/car-images.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];

  filterBrandId: number = 1;
  filterColorId: number = 1;
  filterCarModelName: string = '';

  carsDataLoaded: boolean = false;
  brandsDataLoaded: boolean = false;
  colorsDataLoaded: boolean = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImagesService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandid']) {
        this.getCarsByBrand(params['brandid']);
      } else if (params['colorid']) {
        this.getCarsByColor(params['colorid']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.carsDataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.carsDataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.carsDataLoaded = true;
    });
  }

  getCarsByFilter(brandId: number, colorId: number) {
    this.carService.getCarsByFilter(brandId, colorId).subscribe((response) => {
      this.cars = response.data;
      this.carsDataLoaded = true;
    });
  }

  getImagePath(imagePath: string) {
    return this.carImageService.getImagePath(imagePath);
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.brandsDataLoaded = true;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.colorsDataLoaded = true;
    });
  }
}
