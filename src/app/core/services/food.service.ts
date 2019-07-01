import { FoodMdl } from './../Model/foodMd';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  baseUrl = 'https://localhost:44351/api/food';

  constructor(private http: HttpClient) {}

  getFoods() {
    return this.http.get(this.baseUrl);
  }

  getFoodById(id: number) {
    return this.http.get(this.baseUrl + id);
  }

  addFood(food: FoodMdl) {
    const data =  JSON.stringify(food);
    console.log('dta', data);
    return this.http.post<FoodMdl>(this.baseUrl, food);
  }
}

