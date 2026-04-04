import { Component } from '@angular/core';
import { ICourse } from '../models/icourse';
import { CoursesService } from '../services/courses';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  private activatdedRoute = inject(ActivatedRoute);
  private coursesService = inject(CoursesService);
  course: ICourse | null = null;
  id: number = 0;
  
  ngOnInit(): void {
    const id = Number(this.activatdedRoute.snapshot.params['id']);
    this.course = this.coursesService.getCourseById(id) || null;
  }
}
