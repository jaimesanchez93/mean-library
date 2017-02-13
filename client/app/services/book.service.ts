
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class BookService{
  constructor(private http: Http){
      console.log('Book service initialized...')
  }

  getBooks(){
    return this.http.get('http://localhost:3000/api/books')
        .map(res=>res.json());
  }

  addBook(newBook){
    console.log(newBook);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/books', JSON.stringify(newBook), {headers: headers})
          .map(res=>res.json());
  }

  deleteBook(id){
    return this.http.delete('http://localhost:3000/api/books/'+id)
          .map(res=>res.json());
  }
}
