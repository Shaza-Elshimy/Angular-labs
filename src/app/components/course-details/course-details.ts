import { Component } from '@angular/core';
import { ICourse } from '../../models/icourse';
import { ApiCourses } from '../../services/api-courses';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  private activatdedRoute = inject(ActivatedRoute);
  private apiCoursesService = inject(ApiCourses);
  course: ICourse | null = null;
  id: string = '';
  
  ngOnInit(): void {
    const id = this.activatdedRoute.snapshot.params['id'];
    console.log("ID: ", id);
    this.apiCoursesService.getCourseById(id).subscribe(({
      next: (res) => {
        console.log("Course Details: ", res);
        this.course = res;
      },
      error: (err) => {
        console.error("Error fetching course details: ", err);
      }
    }));

  }
  
}
