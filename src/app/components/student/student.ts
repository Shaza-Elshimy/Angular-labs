import { Component } from '@angular/core';
import { IStudent } from '../../models/istudent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students:IStudent[]=[
    {
      id:1,
      name:'John Doe',
      age:20,
      photoUrl:'assets/images/img1.jpg'
    },
    {
      id:2,
      name:'Jane Smith',
      age:22,
      photoUrl:'assets/images/img2.jpg'
    },
    {
      id:3,
      name:'Michael Johnson',
      age:21,
      photoUrl:'assets/images/img3.jpg'
    }
  ]
}
