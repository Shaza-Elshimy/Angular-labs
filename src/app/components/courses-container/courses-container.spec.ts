import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesContainer } from './courses-container';

describe('CoursesContainer', () => {
  let component: CoursesContainer;
  let fixture: ComponentFixture<CoursesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
