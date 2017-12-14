import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  answers: [{ text: string, value: string }] = [
    {text: 'Нет', value: 'no'},
    {text: 'Да', value: 'yes'}
  ];

  defaults = {
    country: 'ua',
    answer: 'yes'
  };
  isSubmited = false;

  formData = {};

  constructor() {
  }

  ngOnInit() {
  }

  submitForm(event: Event) {
    this.isSubmited = true;
    this.formData = this.form.value;
    console.log(this.form);
    this.form.reset();

  }

  addRE() {
    const randEmail = '1234@mail.com';
    this.form.form.patchValue({
      user: {email: randEmail}
    });
  }
}
