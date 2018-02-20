import { Injectable } from '@angular/core';
import { Book }    from './book';

@Injectable()
export class BookService {
  books: Book[] = [];
  //model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  add(book: Book) {
    this.books.push(book);
  }

  clear() {
    this.books = [];
  }
}