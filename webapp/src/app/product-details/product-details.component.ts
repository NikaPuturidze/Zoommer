import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { ApiService } from '../api.service'
import { Product, ProductResponse } from '@zoommer/shared/interfaces/product.interface'

@Component({
  selector: 'app-product-details',
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private id!: number
  public productResponse!: ProductResponse
  public product!: Product
  public imageIndex = 0
  public translateX = ''
  public toMove = 0

  constructor(
    public apiService: ApiService,
    public router: Router,
    public actR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actR.url.subscribe(() => {
      this.getId()
      this.fetchProduct()
    })
  }

  getId() {
    const route = this.router.url
    const lastPart = route.split('-').pop()?.split('?')[0] ?? ''
    this.id = Number(
      lastPart
        .split('')
        .filter((c) => !isNaN(Number(c)))
        .join('')
    )
  }

  fetchProduct() {
    this.apiService.details(this.id).subscribe((product) => {
      this.productResponse = product
      this.product = this.productResponse.product
    })
  }

  nextImg() {
    if (this.imageIndex < this.product.images.length - 1) {
      this.imageIndex++
      this.toMove -= 300
      this.translateX = `translateX(${this.toMove}px)`
    }
  }

  previousImg() {
    if (this.imageIndex > 0) {
      this.imageIndex--
      this.toMove += 300
      this.translateX = `translateX(${this.toMove}px)`
    }
  }

  getIndex(index: number) {
    if (index < this.imageIndex) {
      this.toMove += 300 * (this.imageIndex - index)
    } else {
      this.toMove -= 300 * (index - this.imageIndex)
    }

    this.imageIndex = index
    this.translateX = `translateX(${this.toMove}px)`
  }
}
