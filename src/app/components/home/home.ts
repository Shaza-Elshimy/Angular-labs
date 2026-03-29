import { Component } from '@angular/core';
import { Student } from "../student/student";
import { Courses } from "../courses/courses";
@Component({
  selector: 'app-home',
  imports: [ Courses],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
