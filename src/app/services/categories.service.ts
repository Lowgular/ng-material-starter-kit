import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';

@Injectable()
export class CategoriesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<CategoryModel[]> {
    return this._httpClient
      .get<CategoryModel[]>(`https://fakestoreapi.com/products/categories`)
      .pipe(map((category) => category));
  }
}
