import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  countryForm: FormGroup;
  countries = ['USA', 'Canada', 'Uk'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.countryForm = this.fb.group({
      countryControl: ['Canada']
    });
  }

}
