import { Component, ChangeDetectorRef, OnInit, inject } from '@angular/core';
import { ICourse } from '../../models/icourse';
import { ApiCourses } from '../../services/api-courses';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails implements OnInit {
  private activatdedRoute = inject(ActivatedRoute);
  private apiCoursesService = inject(ApiCourses);
  private cdr = inject(ChangeDetectorRef);
  course: ICourse | null = null;
  isLoading = true;
  hasError = false;
  
  ngOnInit(): void {
    this.activatdedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (!id) {
        this.course = null;
        this.hasError = true;
        this.isLoading = false;
        this.cdr.detectChanges();
        return;
      }

      this.isLoading = true;
      this.hasError = false;
      this.course = null;

      this.apiCoursesService.getCourseById(id).subscribe({
        next: (res) => {
          this.course = res;
          this.isLoading = false;
          this.hasError = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.course = null;
          this.hasError = true;
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
    });
  }
  
}
