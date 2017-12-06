import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Создание своей директивы';
  items = [1, 2, 3, 4, 5];
  current = 0;
  onClick(num: number) {
    this.current = num;
    // console.log(this.current);
  }
}
