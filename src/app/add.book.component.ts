import { Component } from '@angular/core';
import { BookService } from './book.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-book',
  templateUrl: './app.addBook.html',
  styleUrls: ['./app.component.css']
})
export class AddBookComponent {
  title = 'app';
  book: string;
  constructor(private bookService: BookService) {
    this.book = 'test book'
  }
  addBook(object: NgForm) {
    console.log('Book name is ', object.book)
    this.bookService.add(object);
    console.log('All Books are ', JSON.stringify(object))
  }
  clearData() {
    this.bookService.clear();
  }
}