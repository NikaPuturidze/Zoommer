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
  public imageIndexPopup = 0
  public translateX = ''
  public translateXPopup = ''
  public toMove = 0
  public toMovePopup = 0
  public sliderOpen = false

  constructor(
    public apiService: ApiService,
    public router: Router,
    public actR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actR.url.subscribe(() => {
      this.getId()
      this.fetchProduct()
      this.sliderOpen = false
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
      this.toMove -= 100
      this.translateX = `translateX(${this.toMove}%)`
    }
  }

  previousImg() {
    if (this.imageIndex > 0) {
      this.imageIndex--
      this.toMove += 100
      this.translateX = `translateX(${this.toMove}%)`
    }
  }

  toggleSlider() {
    this.sliderOpen = !this.sliderOpen
  }

  nextImgPopup() {
    if (this.imageIndexPopup < this.product.images.length - 1) {
      this.imageIndexPopup++
      this.toMovePopup -= 100
      this.translateXPopup = `translateX(${this.toMovePopup}%)`
    }
  }

  previousImgPopup() {
    if (this.imageIndexPopup > 0) {
      this.imageIndexPopup--
      this.toMovePopup += 100
      this.translateXPopup = `translateX(${this.toMovePopup}%)`
    }
  }

  moveToSpecific(to: number, popup: boolean) {
    if (popup) {
      let step = to - this.imageIndexPopup

      if (step > 0) {
        while (step--) this.nextImgPopup()
      } else {
        while (step++) this.previousImgPopup()
      }
    } else {
      let step = to - this.imageIndex

      if (step > 0) {
        while (step--) this.nextImg()
      } else {
        while (step++) this.previousImg()
      }
    }
  }
}
