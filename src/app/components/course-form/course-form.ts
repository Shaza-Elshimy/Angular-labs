import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ICourse } from '../../models/icourse';
import { ICategory } from '../../models/icategory';
import { ApiCourses } from '../../services/api-courses';
import { ApiCategories } from '../../services/api-categories';

@Component({
  selector: 'app-course-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm implements OnInit {
  private apiCourses = inject(ApiCourses);
  private apiCategories = inject(ApiCategories);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  categories: ICategory[] = [];
  courseId: string | null = null;
  isEditMode = false;
  errorMessage = '';

  course: Omit<ICourse, 'id'> = {
    title: '',
    instructor: '',
    price: 0,
    seats: 0,
    image: '',
    catId: 0,
    category: '',
  };

  ngOnInit(): void {
    this.loadCategories();

    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.isEditMode = !!this.courseId;

    if (this.courseId) {
      this.apiCourses.getCourseById(this.courseId).subscribe({
        next: (res) => {
          const { id, ...courseData } = res;
          this.course = {
            ...courseData,
            catId: Number(courseData.catId),
            price: Number(courseData.price),
            seats: Number(courseData.seats),
          };
        },
        error: () => {
          this.errorMessage = 'Unable to load course data.';
        },
      });
    }
  }

  loadCategories(): void {
    this.apiCategories.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res.map((cat: any) => ({
          catId: Number(cat.catId ?? cat.id ?? 0),
          catName: cat.catName,
        }));
      },
      error: () => {
        this.errorMessage = 'Unable to load categories.';
      },
    });
  }

  onCategoryChange(): void {
    const selectedCategory = this.categories.find(
      (cat) => Number(cat.catId) === Number(this.course.catId)
    );

    this.course.category = selectedCategory?.catName ?? '';
  }

  saveCourse(): void {
    this.onCategoryChange();

    const request = this.isEditMode && this.courseId
      ? this.apiCourses.updateCourse(this.courseId, this.course)
      : this.apiCourses.addNewCourse(this.course);

    request.subscribe({
      next: () => this.router.navigateByUrl('/home'),
      error: () => {
        this.errorMessage = this.isEditMode
          ? 'Unable to update course.'
          : 'Unable to add course.';
      },
    });
  }
}
