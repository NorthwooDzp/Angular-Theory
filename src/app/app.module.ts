import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AddCarComponent } from './add-car/add-car.component';
import { BackgroundDirective } from './directives/background.directive';
import { PowPipe } from './pipes/pow.pipe';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {CarService} from './services/car.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    PowPipe,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
