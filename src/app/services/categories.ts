import { ICategory } from './../models/icategory';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

export class Categories {
    private categories:ICategory[] = [
    { catId: 1, catName: 'Programming' },
    { catId: 2, catName: 'Design' },
    { catId: 3, catName: 'Marketing' },
    { catId: 4, catName: 'Business' }
  ];

  getAllCategories():ICategory[]{
    return this.categories

  }
}
