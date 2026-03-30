import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { Courses } from "../courses/courses";

@Component({
  selector: 'app-courses-container',
  imports: [Courses, FormsModule],
  templateUrl: './courses-container.html',
  styleUrl: './courses-container.css',
})
export class CoursesContainer {
  selectedCatId:number=0;
  total:number=0
  categories:ICategory[] = [
  { catId: 1, catName: 'Programming' },
  { catId: 2, catName: 'Design' },
  { catId: 3, catName: 'Marketing' },
  { catId: 4, catName: 'Business' }
];

setTotal(receivedtotal:number){
  this.total=receivedtotal;
}
}