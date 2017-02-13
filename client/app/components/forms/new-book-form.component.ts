import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Book} from '../../../Book.js';
import { BookService } from '../../services/book.service';

@Component({
  moduleId: module.id,
  selector: 'newbook-form',
  templateUrl: 'new-book-form.component.html'
})

export class NewBookFormComponent implements OnInit{
  bookForm: FormGroup;
  bookList: Book[];
  constructor(private bookService: BookService){

  }

  ngOnInit(){
    this.bookForm= new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      ISBN: new FormControl(''),
      editorial: new FormControl(''),
      category: new FormControl('')
    });
    this.bookService.getBooks()
    .subscribe(books =>{
      this.bookList=books;
      console.log(books);
    });
  }

  onSubmit({value,valid}: {value: Book, valid: boolean}){
      //console.log(value,valid);
      this.bookService.addBook(value)
      .subscribe(book =>{
        this.bookList.push(book);
        console.log(bookList);
      });

  }

}
