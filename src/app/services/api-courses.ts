import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ICourse } from '../models/icourse';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiCourses {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://69d103e090cd06523d5dc528.mockapi.io/courses';

  getAllCourses():Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.apiUrl);
  }

  getCoursesByCatId(catId:number):Observable<ICourse[]>{
    return this.httpClient.get<ICourse[]>(`${this.apiUrl}?catId=${catId}`);
  }

  getCourseById(id:number):Observable<ICourse>{
    return this.httpClient.get<ICourse>(`${this.apiUrl}/${id}`);
  }

  addNewCourse(course:ICourse):Observable<ICourse> {
    return this.httpClient.post<ICourse>(this.apiUrl, JSON.stringify(course));
  }
}
