import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {
  answers: [{ text: string, value: string }] = [
    {text: 'Нет', value: 'no'},
    {text: 'Да', value: 'yes'}
  ];

  defaults = {
    country: 'ua',
    answer: 'yes'
  };

  isSubmited= false;

  formData = {};

  @ViewChild('form') form: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  submitForm(event: Event) {
    // console.log(this.form);
    this.isSubmited = true;
    this.formData = this.form.form.value;
    this.form.reset();
  }

  addRE() {
    const randEmail = '1234@mail.com';
    this.form.form.patchValue({
      user: {email: randEmail}
    });
  }
}
