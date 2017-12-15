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
  minPassLength = 4;

  constructor() {
  }

  logStatus() {
    console.dir(this.form.get('user.password').errors);
    console.log(this.form.get('user.password').valid);
  }

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z_0-9]+@[a-zA-Z]+?\.[a-zA-Z]{2,6}')]),
        password: new FormControl('', [Validators.required, Validators.pattern(`[a-zA-Z_.0-9]{${this.minPassLength},200}`)]),
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

/*'[a-zA-Z_0-9]+@[a-zA-Z]+?\.[a-zA-Z]{2-6}'*/
/*'[a-zA-Z_0-9]+@[a-zA-Z]+?\.[a-zA-Z]{2,6}'*/