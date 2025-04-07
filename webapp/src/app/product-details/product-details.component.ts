import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { ApiService } from '../api.service'
import { availabilityInStores, Product, ProductResponse } from '@zoommer/shared/interfaces/product.interface'
import { Title } from '@angular/platform-browser'
import { ScaleOnClickDirective } from '../shared/directives/scale-on-click.directive'

@Component({
  selector: 'app-product-details',
  imports: [RouterModule, ScaleOnClickDirective],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  private id!: number
  public productResponse!: ProductResponse
  public availabilityInStores!: availabilityInStores
  public product!: Product
  public sliderOpen = false
  public imageIndex = 0
  public imageIndexPopup = 0
  public imageIndexAccesory = 0
  public imageIndexSimilar = 0
  public translateX = 0
  public translateXPopup = 0
  public translateXAccesory = 0
  public translateXSimilar = 0
  public bundleTotalPrice = 0
  public bundleTotalSalePrice = 0
  public showMore = false
  public tableHeights: number[] = []
  public specificationHeight: number[] = []
  public tableHeightsAfter: number[] = []
  public isViewReady = false
  public warrantyOpen = false

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private router: Router,
    private actR: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  @ViewChildren('tableWrapper') tableWrapper!: QueryList<ElementRef>

  ngOnInit(): void {
    this.actR.url.subscribe(() => {
      this.getId()
      this.fetchProduct()
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.collectTableHeights()
      this.isViewReady = true

      this.cdr.detectChanges()
    })

    this.tableWrapper.changes.subscribe(() => {
      this.collectTableHeights()
      this.cdr.detectChanges()
    })
  }

  collectTableHeights() {
    if (!this.tableWrapper?.length) return

    this.tableHeights = this.tableWrapper.map((wrapper) => wrapper.nativeElement.offsetHeight)
    this.specificationHeight = this.tableHeights.map((height) => {
      return height + 80
    })

    this.tableHeightsAfter = new Array(this.tableHeights.length).fill(0)
  }

  swapHeight(index: number) {
    const current = this.specificationHeight[index]
    const backup = this.tableHeightsAfter[index]

    if (current !== 50) {
      this.tableHeightsAfter[index] = current
      this.specificationHeight[index] = 50
    } else {
      this.specificationHeight[index] = backup
      this.tableHeightsAfter[index] = 0
    }
  }

  totalTableHeight(): string {
    return `${this.specificationHeight.reduce((a, b) => a + b, 20)}px`
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
    this.imageIndexSimilar = 0
    this.imageIndexAccesory = 0
    this.translateX = 0
    this.translateXPopup = 0
    this.translateXSimilar = 0
    this.translateXAccesory = 0
    this.sliderOpen = false
    this.titleService.setTitle(this.product.metaTitle || this.product.name)
  }

  fetchProduct() {
    this.apiService.details(this.id).subscribe((product) => {
      this.productResponse = product
      this.product = this.productResponse.product
      this.availabilityInStores = this.productResponse.availabilityInStores
      this.refreshComponent()
      this.bundleTotalSalePrice = product.product.price
      this.bundleTotalPrice = this.bundleTotalSalePrice
      this.product.bundles.forEach((bundle) => {
        this.bundleTotalSalePrice += bundle.productSalePrice
      })
      this.product.bundles.forEach((bundle) => {
        this.bundleTotalPrice += bundle.productPrice
      })
      product.product.specificationGroup.forEach((group) => {
        group.isActive = true
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
        this.translateX -= 100
      }
    } else {
      if (this.imageIndexPopup < this.product.images.length - 1) {
        this.imageIndexPopup++
        this.translateXPopup -= 100
      }
    }
  }

  previousImg(isPopup: boolean) {
    if (!isPopup) {
      if (this.imageIndex > 0) {
        this.imageIndex--
        this.translateX += 100
      }
    } else {
      if (this.imageIndexPopup > 0) {
        this.imageIndexPopup--
        this.translateXPopup += 100
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

  nextAccessory() {
    if (this.imageIndexAccesory < this.product.accessories.length - 4) {
      this.imageIndexAccesory++
      this.translateXAccesory -= 25
    }
  }

  previousAccessory() {
    if (this.imageIndexAccesory > 0) {
      this.imageIndexAccesory--
      this.translateXAccesory += 25
    }
  }

  nextsimilar() {
    if (this.imageIndexSimilar < this.product.similarProductsList.length - 4) {
      this.imageIndexSimilar++
      this.translateXSimilar -= (180 / 730) * 100
    }
  }

  previoussimilar() {
    if (this.imageIndexSimilar > 0) {
      this.imageIndexSimilar--
      this.translateXSimilar += (180 / 730) * 100
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  roundPrice(price: number) {
    return Math.floor(price / 36)
  }

  openExternalLink(link: string) {
    window.open(link, '_blank')
  }

  toggleWarranty() {
    this.warrantyOpen = !this.warrantyOpen

    if (this.warrantyOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
}
