import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  signal
} from '@angular/core';

import { ICourse } from '../../models/icourse';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClick } from "../../directives/app-disable-after-click";
import { ApiCourses } from '../../services/api-courses';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [NgClass, CommonModule, FormsModule, NgStyle, DiscountPipe, AppDisableAfterClick],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses implements OnChanges, OnInit {

  private router = inject(Router);
  private apiCoursesService = inject(ApiCourses);

  @Input() receivedCatId: number = 0;
  @Output() onTotalChanged = new EventEmitter<number>();

  courses = signal<ICourse[]>([]);
  filteredCourses = signal<ICourse[]>([]);

  totalPrice: number = 0;

  ngOnInit(): void {
    this.apiCoursesService.getAllCourses().subscribe((res) => {
      this.courses.set(res);
      this.filterCourses();
    });
  }

  ngOnChanges(): void {
    const selectedCatId = Number(this.receivedCatId);

    if (selectedCatId === 0) {
      this.filterCourses();
      return;
    }

    this.apiCoursesService.getCoursesByCatId(selectedCatId).subscribe((res) => {
      this.filteredCourses.set(res);
    });
  }

  filterCourses() {
    const selectedCatId = Number(this.receivedCatId);

    if (selectedCatId === 0) {
      this.filteredCourses.set(this.courses());
      return;
    }

    this.filteredCourses.set(
      this.courses().filter((course) => Number(course.catId) === selectedCatId)
    );
  }

  register(course: ICourse) {
    if (course.seats > 0) {
      this.totalPrice += course.price;
      this.onTotalChanged.emit(this.totalPrice);

      // تحديث UI
      this.filteredCourses.update(courses =>
        courses.map(c =>
          c.id === course.id
            ? { ...c, seats: c.seats - 1 }
            : c
        )
      );
    }
  }

  navigateToDetails(id: number | string) {
    this.router.navigateByUrl(`/details/${id}`);
  }
}