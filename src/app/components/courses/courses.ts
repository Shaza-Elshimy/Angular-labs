import { Component ,Input, OnChanges} from '@angular/core';
import { ICourse } from '../../models/icourse';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClick } from "../../directives/app-disable-after-click";


@Component({
  selector: 'app-courses',
  imports: [NgClass, CommonModule, FormsModule, NgStyle, DiscountPipe, AppDisableAfterClick],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses implements OnChanges{
  selectedCatId:number=0;

  ngOnChanges(): void {
    this.filterCourses()
  }
  
  categories:ICategory[] = [
  { catId: 1, catName: 'Programming' },
  { catId: 2, catName: 'Design' },
  { catId: 3, catName: 'Marketing' },
  { catId: 4, catName: 'Business' }
];
  courses: ICourse[] = [
  {
    id: 1,
    title: 'Angular Basics',
    instructor: 'Mona',
    price: 100,
    seats: 5,
    image: 'https://picsum.photos/200?random=1',
    catId: 1,
    category:'programing'
  },
  {
    id: 2,
    title: 'Advanced Angular',
    instructor: 'Mona',
    price: 200,
    seats: 1,
    image: 'https://picsum.photos/200?random=2',
    catId: 1,
    category:'programing'
  },
  {
    id: 3,
    title: 'React Fundamentals',
    instructor: 'Ahmed',
    price: 120,
    seats: 3,
    image: 'https://picsum.photos/200?random=3',
    catId: 1,
    category:'programing'
  },
  {
    id: 4,
    title: 'UI Design',
    instructor: 'Sara',
    price: 150,
    seats: 0,
    image: 'https://picsum.photos/200?random=4',
    catId: 2,
    category:'design'
  },
  {
    id: 5,
    title: 'UX Principles',
    instructor: 'Laila',
    price: 130,
    seats: 2,
    image: 'https://picsum.photos/200?random=5',
    catId: 2,
    category:'design'
  },
  {
    id: 6,
    title: 'Digital Marketing',
    instructor: 'Omar',
    price: 110,
    seats: 4,
    image: 'https://picsum.photos/200?random=6',
    catId: 3,
        category:'Marketing'
  },
  {
    id: 7,
    title: 'SEO Basics',
    instructor: 'Ali',
    price: 90,
    seats: 0,
    image: 'https://picsum.photos/200?random=7',
    catId: 3,
    category:'marketing'
  },
  {
    id: 8,
    title: 'Business Strategy',
    instructor: 'Hassan',
    price: 180,
    seats: 6,
    image: 'https://picsum.photos/200?random=8',
    catId: 4,
    category:'business'
  },
  {
    id: 9,
    title: 'Startup Management',
    instructor: 'Nour',
    price: 170,
    seats: 2,
    image: 'https://picsum.photos/200?random=9',
    catId: 4,
    category:'business'
  },
  {
    id: 10,
    title: 'Project Management',
    instructor: 'Karim',
    price: 140,
    seats: 0,
    image: 'https://picsum.photos/200?random=10',
    catId: 4,
    category:'business'
  }
];

@Input('sentSelectedCatId') receivedCatId:number=0;

filteredCourses:ICourse[]=this.courses
register(course:ICourse){
  if(course.seats>0){
    course.seats--;
  }
}
filterCourses(){
  if(this.receivedCatId==0){
    this.filteredCourses=this.courses
  }else{
    this.filteredCourses=this.courses.filter((c)=>c.catId==this.receivedCatId)
  }
}
}
