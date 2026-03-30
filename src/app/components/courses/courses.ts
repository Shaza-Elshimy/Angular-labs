import { Component ,EventEmitter,Input,Output, OnChanges} from '@angular/core';
import { ICourse } from '../../models/icourse';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClick } from "../../directives/app-disable-after-click";
import { CoursesService } from '../../services/courses';

@Component({
  selector: 'app-courses',
  imports: [NgClass, CommonModule, FormsModule, NgStyle, DiscountPipe, AppDisableAfterClick],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses implements OnChanges{
  @Input('sentSelectedCatId') receivedCatId:number=0;
  @Output() onTotalChanged:EventEmitter<number>=new EventEmitter<number>();

  courses: ICourse[];
  filteredCourses: ICourse[];

  constructor(private CoursesService:CoursesService){
    this.courses=this.CoursesService.getAllCourses();
    this.filteredCourses =this.courses;
  }

  selectedCatId:number=0;
  totalPrice:number=0;

  ngOnChanges(): void {
    this.filterCourses();
  }

  register(course:ICourse){
    if(course.seats>0){
      course.seats--;
      this.totalPrice += course.price;
      //fire event
      this.onTotalChanged.emit(this.totalPrice);
    }
  }

  filterCourses(){
    if(this.receivedCatId==0){
      this.filteredCourses=this.courses;
    }else{
      this.filteredCourses = this.CoursesService.getCoursesByCatId(this.receivedCatId);
    }
  }
}
