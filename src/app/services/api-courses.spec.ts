import { TestBed } from '@angular/core/testing';

import { ApiCourses } from './api-courses';

describe('ApiCourses', () => {
  let service: ApiCourses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCourses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
