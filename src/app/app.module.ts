import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PersonDetailComponent } from './person-details.component';

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    PersonDetailComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
