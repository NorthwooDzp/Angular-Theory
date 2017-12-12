import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {
  answers: [{ text: string, value: string }] = [
    {text: 'Нет', value: 'no'},
    {text: 'Да', value: 'yes'}
  ]
  formstatus: boolean = true;

  constructor() {
  }


  // this.formstatus = (this.form.form.status === 'INVALID') ? true : false;

  ngOnInit() {
  }

  submitForm(event: Event, form: NgForm) {
    console.log(form);

  }
}
