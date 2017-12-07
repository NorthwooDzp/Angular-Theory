import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* title = 'Создание своей директивы';
   items = [1, 2, 3, 4, 5];
   current = 0;*/ // for directives

  /*name = 'Vladimir';
  pi = Math.PI;
  money = 400;
  myDate = new Date();
  amount = 0.4585632;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3]
    }
  };*/ // for built-in pipes

  /*onClick(num: number) {
    this.current = num;
    // console.log(this.current);
  }*/ // for directives

  num = 2;

}
