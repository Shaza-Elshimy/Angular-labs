import { Component } from '@angular/core';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { IStudent } from '../../models/istudent';
import { Student } from "../student/student";
import { Courses } from "../courses/courses";
@Component({
  selector: 'app-home',
  imports: [Student, Courses],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
