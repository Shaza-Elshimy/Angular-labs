import { Component } from '@angular/core';
import { Student } from "../student/student";
import { Courses } from "../courses/courses";
import { CoursesContainer } from '../courses-container/courses-container';
@Component({
  selector: 'app-home',
  imports: [CoursesContainer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
