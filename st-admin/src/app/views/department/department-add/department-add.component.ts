import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {
  departmentAdd!: FormGroup;
  constructor() { }
  toppings = new FormControl('');
  ngOnInit(): void {
  }



  depSubmit(){

  }

}
