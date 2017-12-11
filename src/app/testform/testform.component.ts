import {Component, OnInit} from '@angular/core';

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


  constructor() {
  }

  ngOnInit() {
  }

}
