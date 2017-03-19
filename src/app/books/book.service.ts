import { Injectable }from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IBook } from './book';

@Injectable()
export class BookService {
	private API_KEY = 'AIzaSyAN3JdoTtSXyeQ35LYA5plroxM3gizMhaQ';
	private _apiUrl: string;

	constructor(private _http: Http){}

	getBooks(query: string): Observable<IBook[]> {
		this._apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=' + this.API_KEY;
		return this._http.get(this._apiUrl)
			.map((response: Response) => response.json())
			.map((result) => result.items.map(this.transformItems))
			.catch(this.handleError);
	}

	// getProduct(id: number): Observable<IBook> {
	// 	return this.getProducts()
 //            .map((products: IBook[]) => products.find(p => p.productId === id));
	// }

	private transformItems(bookItem): IBook {
		let book = bookItem.volumeInfo;
	    return {
	        title : book.title,
	        subtitle: book.subtitle,
	        author: book.authors ? book.authors[0] : 'Unknown',
	        image : book.imageLinks ? book.imageLinks.thumbnail : 'http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
	    }
	}

	private handleError(error: Response) {
		console.log(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}