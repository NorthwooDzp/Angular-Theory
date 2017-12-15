import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {reject} from 'q';

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

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], [this.checkForEmail]),
        password: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z_.0-9]+"), this.checkPassLength.bind(this)]),
      }),
      country: new FormControl('ua'),
      answer: new FormControl('yes')
    });
  }

  onSubmit() {
    console.log('submited', this.form);
    this.isSubmited = true;
  }

  checkPassLength(control: FormControl) {
    if (control.value.length < this.minPassLength) {
      return {
        'lengthErr': true
      };
    }
    return null;
  }

  checkForEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'northwood@list.ru') {
          resolve({
            'emailErr': true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }



}

/*'[a-zA-Z_0-9]+@[a-zA-Z]+?\.[a-zA-Z]{2-6}'*/
/*'[a-zA-Z_0-9]+@[a-zA-Z]+?\.[a-zA-Z]{2,6}'*/
/**/
