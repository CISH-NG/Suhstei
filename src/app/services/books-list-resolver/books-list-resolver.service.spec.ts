import { TestBed } from '@angular/core/testing';

import { BooksListResolver} from './books-list-resolver.service';

describe('BooksListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksListResolver = TestBed.get(BooksListResolver);
    expect(service).toBeTruthy();
  });
});
