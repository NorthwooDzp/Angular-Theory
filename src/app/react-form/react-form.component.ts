import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  isSubmited = false;
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z_.0-9]{4,200}')]),
      }),
      country: new FormControl('ua'),
      answer: new FormControl('yes')
    });
  }

  onSubmit() {
    console.log('submited', this.form);
    this.isSubmited = true;
  }
}
