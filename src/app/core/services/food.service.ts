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
    this.http.get(this.baseUrl).subscribe(res => {
      console.log(res);
    });
  }

  getFoodById(id: number) {
    this.http.get(this.baseUrl + id).subscribe(res => {
      console.log(res);
    });
  }

  addFood(food: FoodMdl) {
    return this.http.post<FoodMdl>(this.baseUrl, food);
  }
}

