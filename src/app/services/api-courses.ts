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

  getAllCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.apiUrl);
  }

  getCoursesByCatId(catId: number): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${this.apiUrl}?catId=${catId}`);
  }

  getCourseById(id: string): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.apiUrl}/${id}`);
  }

  addNewCourse(course: Omit<ICourse, 'id'>): Observable<ICourse> {
    return this.httpClient.post<ICourse>(this.apiUrl, course);
  }

  updateCourse(id: string, course: Partial<ICourse>): Observable<ICourse> {
    return this.httpClient.put<ICourse>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
