import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {
  @ViewChild('form') form2: NgForm;

  answers: [{ text: string, value: string }] = [
    {text: 'Нет', value: 'no'},
    {text: 'Да', value: 'yes'}
  ];

  defaults = {
    country: 'ua',
    answer: 'yes'
  };
  copy = {};
  isSubmited = false;

  formData = {};



  constructor() {
  }

  ngOnInit() {

  }

  submitForm(event: Event) {
    this.isSubmited = true;
    this.formData = this.form2.value;
    for (let key in this.form2) {
      this.copy[key] = this.form2[key];
    }
    console.dir(this.copy);
    console.dir(this.form2);
    this.form2.reset();

  }

  addRE() {
    const randEmail = '1234@mail.com';
    this.form2.form.patchValue({
      user: {email: randEmail}
    });
  }
}
