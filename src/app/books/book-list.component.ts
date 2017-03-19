import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service'

@Component({
	selector: 'book-list',
	templateUrl: 'book-list.component.html'
})
export class BookListComponent {
	errorMessage: string;
	books: IBook[];
	query: string;

	constructor(private _bookService: BookService) {

	}

	searchBooks(): void {
		console.log(this.query);
		this._bookService.getBooks(this.query)
			.subscribe(books => this.books = books,
						error => this.errorMessage = <any>error);
	}

}