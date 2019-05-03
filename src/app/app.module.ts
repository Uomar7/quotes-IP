import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuotesDetailsComponent } from './components/quotes-details/quotes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
