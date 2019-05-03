import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  //Trending quotes displayed on Homepage
  quotes = [
    new Quote('Get Rich or Die Trying', '"50" Cent'),
    new Quote('The Dream is Free but the Hustle is sold separately', 'Unknown'),
    new Quote('Life is what happens when you are busy making other plans', 'John Lennon'),
  ]

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
