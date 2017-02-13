import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../../Book';

@Component({
  moduleId: module.id,
  selector: 'book',
  templateUrl: 'books.component.html'
})

export class BooksComponent implements OnInit{

  books: Book[];

  //Book attributes
  title: string;
  author: string;
  ISBN: string;
  editorial: string;
  category: string;

  constructor(private bookService: BookService){

  }

  ngOnInit(){
    this.bookService.getBooks()
    .subscribe(books =>{
      this.books=books;
      console.log(books);
    });
  }

  addBook(event){
     event.preventDefault();
     var newBook= {
       title: this.title,
       author: this.author,
       ISBN: this.ISBN,
       editorial: this.editorial,
       category: this.category
     }
     this.bookService.addBook(newBook)
          .subscribe(book =>{
            this.books.push(book);
          });
  }

  deleteBook(id){
    var books= this.books;
    this.bookService.deleteBook(id)
        .subscribe(book =>{
            if(book.n==1){
              for(var i=0;i<books.length;i++){
                if(books[i]._id==id){
                  books.splice(i,1);
                }
              }
            }
        });
  }


}
