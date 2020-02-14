import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookListComponent } from './book-list/book-list.component';
import { Error404Component } from './errors/page-404/404.component';
import { SearchComponent } from './search/search.component';
import { IcomoonComponent } from './icomoon/icomoon.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BooksListResolver, BookViewResolver, SearchResolver } from './services';
import { UserResolver } from './services/user-resolver/user-resolver.service';

export  const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  {
    path: 'book',
    component: BookListComponent,
    resolve: {
      books: BooksListResolver
    }
  },
  {
    path: 'book-view/:id',
    component: BookViewComponent,
    resolve: {
      book: BookViewResolver,
      user: UserResolver
    }
  },
  // { path: 'book', component: BookListComponent },
  { path: 'search-result', component: SearchComponent, resolve: {books: BooksListResolver}},
  { path: 'icomoon', component: IcomoonComponent},
  // { path: '404', component: Error404Component},
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: '**', component: Error404Component }
];
