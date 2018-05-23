import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import firebase from 'firebase/app';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
