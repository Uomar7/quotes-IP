import { Component } from '@angular/core';
import { Quotes, Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote('Get Rich or Die Trying 50 cent'),
    new Quote('The Dream is Free but the Hustle is sold separately unknown'),
    new Quote('Life is what happens when you are busy making other plans john lennon'),
  ]
}
