import { ApiCategories } from './../../services/api-categories';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { Courses } from "../courses/courses";

@Component({
  selector: 'app-courses-container',
  imports: [Courses, FormsModule],
  templateUrl: './courses-container.html',
  styleUrl: './courses-container.css',
})
export class CoursesContainer implements OnInit {

  selectedCatId: number = 0;
  total: number = 0;

  private apiCategories = inject(ApiCategories);

  categories: ICategory[] = [];

  ngOnInit(): void {
    this.apiCategories.getAllCategories().subscribe((res) => {
      this.categories = res.map((cat: any) => ({
        catId: Number(cat.catId ?? cat.caId ?? 0),
        catName: cat.catName,
      }));
    });
  }

  setTotal(receivedtotal: number): void {
    this.total = receivedtotal;
  }
}