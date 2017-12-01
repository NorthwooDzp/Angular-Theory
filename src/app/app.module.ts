import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
