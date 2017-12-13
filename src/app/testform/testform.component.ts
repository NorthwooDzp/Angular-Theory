import {Component, OnInit} from '@angular/core';
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


  constructor() {
  }

  ngOnInit() {
  }

  submitForm(event: Event, form: NgForm) {
    console.log(form);
  }

}
