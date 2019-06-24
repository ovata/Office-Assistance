import { FoodService } from './../../core/services/food.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dbody',
  templateUrl: './dbody.component.html',
  styleUrls: ['./dbody.component.css']
})
export class DBodyComponent implements OnInit {
  task: string;
  price: string;
  tasks = [];
  order = [];
  model: any = {};
  foods = [];
  private myForm: FormGroup;


  constructor(public ngxSmartModalService: NgxSmartModalService, private food: FoodService, private fb: FormBuilder) { }

  ngOnInit() {
   this.food.getFoods();
   this.myForm = new FormGroup({
    name: new FormControl(),
    subFoods: new FormControl()
  });
  }

  // onClick(data) {
  //   this.tasks.push({food_name: this.task, price: this.price});
  //   this.tasks.splice(5, 1);
  //   this.task = '';
  // }

  clear() {
    this.tasks = [];

  }

  addFood(newFood: string, newPrice: string) {
    if (newFood && newPrice) {
      this.foods.push({food_name: newFood, price: newPrice});
      this.foods.splice(5, 1);
      console.log('clickk', this.foods);
    }
  }

  onClickDelete(index) {
    this.foods.splice(index, 1);
  }

  onSubmit(data) {
    console.log(data);
    this.food.addFood(data).subscribe(
          (res: any) => {
          },
          err => {
            console.log(err);
          }
        );
    this.foods = [];
        }
  
}
