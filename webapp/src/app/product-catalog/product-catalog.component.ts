import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api.service'
import { ChangeContext, NgxSliderModule, Options, PointerType } from '@angular-slider/ngx-slider'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { Product } from '@zoommer/shared/interfaces/product-catalog.interface'
import { ProductResponse } from '@zoommer/shared/interfaces/product.interface'
import { Filter } from '@zoommer/shared/interfaces/filter.interface'
import { ScaleOnClickDirective } from '../shared/directives/scale-on-click.directive'

interface QueryParams {
  minPrice?: number
  maxPrice?: number
  priceAsc?: string
  nameAsc?: string
}

@Component({
  selector: 'app-product-catalog',
  imports: [RouterModule, FormsModule, NgxSliderModule, ScaleOnClickDirective],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss',
})
export class ProductCatalogComponent implements OnInit {
  private id!: number
  public filter!: Filter
  public products!: Product[]
  public sortOpen = false
  public cardType = false
  public options!: Options
  public minPrice!: number
  public maxPrice!: number
  public queryParams: QueryParams = {}
  public sortArray: string[] = ['ფასი: კლებადობით', 'ფასი: ზრდადობით', 'დასახელება: A-Z', 'დასახელება: Z-A']
  public chosenSortType = 'სორტირება'
  public fetchFinished = false

  constructor(
    private router: Router,
    public apiService: ApiService,
    public actR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const route = this.router.url
    const lastPart = route.split('-').pop()?.split('?')[0] ?? ''

    this.id = Number(
      lastPart
        .split('')
        .filter((c) => !isNaN(Number(c)))
        .join('')
    )

    this.actR.queryParams.subscribe((queryParams: QueryParams) => {
      this.queryParams = queryParams

      this.readQuerySort()
      this.setPriceFromQueryParams()

      this.apiService
        .products(
          this.id,
          this.queryParams.maxPrice,
          this.queryParams.minPrice,
          this.queryParams.nameAsc,
          this.queryParams.priceAsc
        )
        .subscribe((products: ProductResponse[]) => {
          this.products = products.map((p) => p.product)
        })
    })

    this.apiService.filter(this.id).subscribe((filter: Filter) => {
      this.filter = filter
      this.maxPrice = this.queryParams.maxPrice ?? this.filter.maxPrice

      this.options = {
        floor: 0,
        ceil: this.filter.maxPrice,
        step: 1,
        showSelectionBar: true,
        translate: (value: number): string => {
          return `${value} ₾`
        },
      }

      const changeContext: ChangeContext = {
        value: this.minPrice,
        highValue: this.maxPrice,
        pointerType: PointerType.Min,
      }

      this.updatePriceSliderValues(changeContext)

      setTimeout(() => {
        this.updateBeforeContent(changeContext.value, changeContext?.highValue)
      }, 350)
    })
  }

  setPriceFromQueryParams(): void {
    if (this.queryParams.minPrice) {
      this.minPrice = this.queryParams.minPrice
    } else {
      this.minPrice = 0
    }

    if (this.queryParams.maxPrice) {
      this.maxPrice = this.queryParams.maxPrice
    } else {
      this.maxPrice = this.filter?.maxPrice ?? 0
    }
  }

  onUserChangeStart(changeContext: ChangeContext): void {
    this.updatePriceSliderValues(changeContext)
    this.updateBeforeContent(this.minPrice, this.maxPrice)
  }

  onUserChange(changeContext: ChangeContext): void {
    this.updatePriceSliderValues(changeContext)
    this.updateBeforeContent(this.minPrice, this.maxPrice)
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.updatePriceSliderValues(changeContext)
    this.updateBeforeContent(this.minPrice, this.maxPrice)
    this.setQuery({ minPrice: this.minPrice, maxPrice: this.maxPrice })
  }

  updatePriceSliderValues(changeContext: ChangeContext): void {
    this.minPrice = changeContext.value
    this.maxPrice = changeContext.highValue ?? this.filter.maxPrice
  }

  updateBeforeContent(min: number, max?: number): void {
    const minElement = document.querySelector('.ngx-slider-pointer-min') as HTMLElement
    const maxElement = document.querySelector('.ngx-slider-pointer-max') as HTMLElement

    minElement.style.setProperty('--before-content', `'${min}  ₾'`)
    maxElement.style.setProperty('--before-content', `'${max}  ₾'`)
  }

  validatePrice(event: Event, type: 'min' | 'max'): void {
    const target = event.target as HTMLInputElement
    let inputValue = Number(target.value)

    if (type === 'min') {
      if (inputValue < 0 || isNaN(inputValue)) {
        this.minPrice = 0
      } else if (inputValue > this.maxPrice) {
        this.minPrice = this.maxPrice
      } else {
        this.minPrice = inputValue
      }
    } else if (type === 'max') {
      if (inputValue > this.filter.maxPrice) {
        this.maxPrice = this.filter.maxPrice
      } else if (inputValue < this.minPrice) {
        this.maxPrice = this.minPrice
        this.minPrice = inputValue
      } else {
        this.maxPrice = inputValue
      }
    }

    this.updateBeforeContent(this.minPrice, this.maxPrice)
    inputValue = type === 'min' ? this.minPrice : this.maxPrice

    this.setQuery({ minPrice: this.minPrice, maxPrice: this.maxPrice })
  }

  toggle() {
    this.sortOpen = !this.sortOpen
  }

  sort(index: number) {
    this.chosenSortType = this.sortArray[index]

    if (this.chosenSortType == this.sortArray[0]) {
      this.setQuery({ priceAsc: 'false', nameAsc: '' })
    } else if (this.chosenSortType == this.sortArray[1]) {
      this.setQuery({ priceAsc: 'true', nameAsc: '' })
    } else if (this.chosenSortType == this.sortArray[2]) {
      this.setQuery({ nameAsc: 'true', priceAsc: '' })
    } else if (this.chosenSortType == this.sortArray[3]) {
      this.setQuery({ nameAsc: 'false', priceAsc: '' })
    }

    this.sortOpen = false
  }

  readQuerySort(): void {
    if (this.queryParams.priceAsc == 'false' && this.queryParams.nameAsc === '') {
      this.chosenSortType = this.sortArray[0]
    }
    if (this.queryParams.priceAsc == 'true' && this.queryParams.nameAsc === '') {
      this.chosenSortType = this.sortArray[1]
    }
    if (this.queryParams.priceAsc === '' && this.queryParams.nameAsc == 'true') {
      this.chosenSortType = this.sortArray[2]
    }
    if (this.queryParams.priceAsc === '' && this.queryParams.nameAsc == 'false') {
      this.chosenSortType = this.sortArray[3]
    }
  }

  setQuery(params: Partial<QueryParams>) {
    this.router.navigate([], {
      queryParams: params,
      queryParamsHandling: 'merge',
    })
  }

  roundPrice(price: number) {
    return Math.floor(price / 36)
  }
}
