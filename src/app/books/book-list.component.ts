import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service'

@Component({
	selector: 'book-list',
	templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
	errorMessage: string;
	books: IBook[];

	constructor(private _bookService: BookService) {

	}

	ngOnInit(): void {
		this._bookService.getBooks()
			.subscribe(books => this.books = books,
						error => this.errorMessage = <any>error);
	}

}