import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Product } from '../../../shared/interfaces/products-interface'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3001/'
  constructor(public http: HttpClient) {}

  productDetails(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + 'detail/' + id)
  }
}
