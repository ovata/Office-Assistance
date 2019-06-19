import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  formData = new FormGroup ({
    userName: new FormControl ('', Validators.required),
    food: new FormControl ('', Validators.required)
  });


  constructor(public ngxSmartModalService: NgxSmartModalService) { }
  

  onClick(data) {
    this.tasks.push({food_name: this.task, price: this.price});
    this.tasks.splice(5, 1);
    this.task = '';
   
  }

  clear() {
    this.tasks = [];

  }

  onClickDelete(index) {
    this.tasks.splice(index, 1);
  }

  onSubmit(data) {
    this.order.push({name: this.model.name, food: this.tasks});
    console.log('data', this.order);
    this.order = [];
    // console.log(this.tasks);
  }

  ngOnInit() {
    
  }

}
