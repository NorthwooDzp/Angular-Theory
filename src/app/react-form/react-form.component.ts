import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {

  answers: [{ text: string, value: string }] = [
    {text: 'Да', value: 'yes'},
    {text: 'Нет', value: 'no'}
  ];

  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      country: new FormControl('ua'),
      answer: new FormControl('yes')
    });
  }

  onSubmit() {
    console.log('submited', this.form);
  };
}
