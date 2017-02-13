import { Component } from '@angular/core';
import { BookService } from './services/book.service';
@Component({
  selector: 'my-app',
  template: `<book></book>`,
  providers: [BookService]
})
export class AppComponent { name = 'Angular'; }
