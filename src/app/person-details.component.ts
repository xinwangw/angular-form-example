import { Component }              from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html'
})

export class PersonDetailComponent {
  personForm : FormGroup;
  days : number[] = [];
  months = moment.months();

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
    for (let i=1; i<=31; i++){
      this.days.push(i);
    }
   }

  createForm() {
    this.personForm = this.fb.group({
      name: ['', Validators.required ],
      birthday: this.fb.group({
        year: '',
        month: '',
        day: '',
      }),
    });
  }
}
