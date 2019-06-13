import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dbody',
  templateUrl: './dbody.component.html',
  styleUrls: ['./dbody.component.css']
})
export class DBodyComponent implements OnInit {

  model: any = {};
  formData = new FormGroup ({
    userName: new FormControl ('', Validators.required)
  });


  constructor(public ngxSmartModalService: NgxSmartModalService) { }
  task: string;
  tasks = [];

  onClick(data) {
    this.tasks.push({name: this.task, strike: false});
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
    console.log(data, this.model)
  }

  ngOnInit() {
  }

}
