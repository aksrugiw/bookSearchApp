import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component'
// import { ProductDetailComponent } from './product-detail.component'
// import { ProductFilterPipe } from './product-filter.pipe'
// import { ProductDetailGuard } from './product-guard.service';
import { BookService } from './book.service';

// import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		BookListComponent,
	    // ProductDetailComponent,
		// ProductFilterPipe,
	],
	imports: [
		// SharedModule,
		// RouterModule.forChild([
		// 	{ path: 'products', component: ProductListComponent },
		// 	{ path: 'product/:id',
		// 	  canActivate: [ ProductDetailGuard ],
		// 	  component: ProductDetailComponent },
			
		// ])
	],
	providers: [
		BookService,
		// ProductDetailGuard
	]
})
export class BookModule {}