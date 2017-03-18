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
	private _apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=harry&key=' + this.API_KEY;

	constructor(private _http: Http){}

	getBooks(): Observable<IBook[]> {
		return this._http.get(this._apiUrl)
			.map((response: Response) => <IBook[]> response.json())
			.do(data => console.log( JSON.stringify(data)))
			.catch(this.handleError);
	}

	// getProduct(id: number): Observable<IBook> {
	// 	return this.getProducts()
 //            .map((products: IBook[]) => products.find(p => p.productId === id));
	// }

	private handleError(error: Response) {
		console.log(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}