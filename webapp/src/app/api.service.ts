import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CategoryResponse } from '../../../backend/src/category/category.interface'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3001/'
  constructor(public http: HttpClient) {}

  apiRoute = ['categories']

  getCategories(): Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(this.apiUrl + this.apiRoute[0])
  }
}
