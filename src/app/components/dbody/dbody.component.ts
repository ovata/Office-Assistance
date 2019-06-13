import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dbody',
  templateUrl: './dbody.component.html',
  styleUrls: ['./dbody.component.css']
})
export class DBodyComponent implements OnInit {

  form: FormGroup;


  constructor(public ngxSmartModalService: NgxSmartModalService) { }
  task: string;
  tasks = [];

  onClick() {
    this.tasks.push({name: this.task, strike: false});
    this.tasks.splice(5, 1);
    this.task = '';
  }



  onClickDelete(index) {
    this.tasks.splice(index, 1);
  }

  ngOnInit() {
  }

}
