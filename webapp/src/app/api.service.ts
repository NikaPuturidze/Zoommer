import { HttpClient, HttpParams } from '@angular/common/http'
import { MegaMenu } from '@zoommer/shared/interfaces/mega-menu.interface'
import { ProductResponse } from '@zoommer/shared/interfaces/product.interface'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Filter } from '@zoommer/shared/interfaces/filter.interface'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3001/'
  constructor(public http: HttpClient) {}

  megaMenu(): Observable<MegaMenu[]> {
    return this.http.get<MegaMenu[]>(`${this.apiUrl}mega-menu`)
  }

  filter(categoryId: number): Observable<Filter> {
    return this.http.get<Filter>(this.apiUrl + `filter?categoryId=${categoryId}`)
  }

  products(
    catId: number,
    maxPrice?: number,
    minPrice?: number,
    nameAsc?: string,
    priceAsc?: string
  ): Observable<ProductResponse[]> {
    let params = new HttpParams().set('catId', catId.toString())

    if (maxPrice !== undefined) params = params.set('maxPrice', maxPrice.toString())
    if (minPrice !== undefined) params = params.set('minPrice', minPrice.toString())
    if (nameAsc !== undefined) params = params.set('nameAsc', nameAsc.toString())
    if (priceAsc !== undefined) params = params.set('priceAsc', priceAsc.toString())

    return this.http.get<ProductResponse[]>(`${this.apiUrl}products`, { params })
  }

  details(productId: number): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl + `details?productId=${productId}`)
  }
}
