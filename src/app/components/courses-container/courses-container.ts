import { Categories } from '../../services/categories';
import { Component, inject } from '@angular/core';
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
  selectedCatId: number = 0;
  total: number = 0;

  private categoriesService = inject(Categories);
  categories: ICategory[] = this.categoriesService.getAllCategories();

  setTotal(receivedtotal: number): void {
    this.total = receivedtotal;
  }
}