import { TestBed } from '@angular/core/testing';

import { ApiCategories } from './api-categories';

describe('ApiCategories', () => {
  let service: ApiCategories;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCategories);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
