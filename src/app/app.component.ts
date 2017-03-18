import { Component } from '@angular/core';
import { BookListComponent } from './books/book-list.component';
import { BookService } from './books/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {
  title = 'app works!';
}
