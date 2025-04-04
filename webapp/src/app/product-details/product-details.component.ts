import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { ApiService } from '../api.service'
import { Product, ProductResponse } from '@zoommer/shared/interfaces/product.interface'
import { Title } from '@angular/platform-browser'

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
  public bundleTotalPrice = 0
  public bundleTotalSalePrice = 0

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private router: Router,
    private actR: ActivatedRoute
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

  refreshComponent() {
    this.imageIndex = 0
    this.imageIndexPopup = 0
    this.translateX = ''
    this.translateXPopup = ''
    this.toMove = 0
    this.toMovePopup = 0
    this.sliderOpen = false
  }

  fetchProduct() {
    this.apiService.details(this.id).subscribe((product) => {
      this.productResponse = product
      this.product = this.productResponse.product
      this.refreshComponent()
      this.titleService.setTitle(this.product.metaTitle || this.product.name)
      this.bundleTotalSalePrice = product.product.price
      this.bundleTotalPrice = this.bundleTotalSalePrice
      this.product.bundles.forEach((bundle) => {
        this.bundleTotalSalePrice += bundle.productSalePrice
      })
      this.product.bundles.forEach((bundle) => {
        this.bundleTotalPrice += bundle.productPrice
      })
    })
  }

  removeBundle(index: number) {
    this.bundleTotalSalePrice -= this.product.bundles[index].productSalePrice
    this.bundleTotalPrice -= this.product.bundles[index].productPrice
    this.product.bundles.splice(index, 1)
  }

  toggleSlider() {
    this.sliderOpen = !this.sliderOpen

    if (this.sliderOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  nextImg(isPopup: boolean) {
    if (!isPopup) {
      if (this.imageIndex < this.product.images.length - 1) {
        this.imageIndex++
        this.toMove -= 100
        this.translateX = `translateX(${this.toMove}%)`
      }
    } else {
      if (this.imageIndexPopup < this.product.images.length - 1) {
        this.imageIndexPopup++
        this.toMovePopup -= 100
        this.translateXPopup = `translateX(${this.toMovePopup}%)`
      }
    }
  }

  previousImg(isPopup: boolean) {
    if (!isPopup) {
      if (this.imageIndex > 0) {
        this.imageIndex--
        this.toMove += 100
        this.translateX = `translateX(${this.toMove}%)`
      }
    } else {
      if (this.imageIndexPopup > 0) {
        this.imageIndexPopup--
        this.toMovePopup += 100
        this.translateXPopup = `translateX(${this.toMovePopup}%)`
      }
    }
  }

  moveToSpecific(to: number, popup: boolean) {
    if (popup) {
      let step = to - this.imageIndexPopup

      if (step > 0) {
        while (step--) this.nextImg(popup)
      } else {
        while (step++) this.previousImg(popup)
      }
    } else {
      let step = to - this.imageIndex

      if (step > 0) {
        while (step--) this.nextImg(popup)
      } else {
        while (step++) this.previousImg(popup)
      }
    }
  }
}
