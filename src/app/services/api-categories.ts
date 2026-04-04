import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiCategories {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://69d103e090cd06523d5dc528.mockapi.io/categories';

getAllCategories():Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.apiUrl);
}
}
