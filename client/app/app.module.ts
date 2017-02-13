import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {BooksComponent } from './components/books/books.component';
import { NewBookFormComponent } from './components/forms/new-book-form.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BooksComponent, NewBookFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
