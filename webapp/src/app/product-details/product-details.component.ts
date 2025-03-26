import { Component, OnInit } from '@angular/core'
import { Product } from '../../../../shared/interfaces/products-interface'
import { RouterModule } from '@angular/router'
import { ApiService } from '../api.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-product-details',
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  public product!: Product
  public imageIndex = 0
  public translateX = ''
  public toMove = 0

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.productDetails(1).subscribe({
      next: (product: Product) => {
        this.product = product
      },
      error: (err: HttpErrorResponse) => {
        console.error(err)
      },
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
