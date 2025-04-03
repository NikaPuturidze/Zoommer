export interface FilterSpecificationValue {
  id: number
  value: string
}

export interface FilterSpecification {
  id: number
  category1: string
  category2: string
  categoryName: string
  name: string
  values: FilterSpecificationValue[]
}

export interface Filter {
  category1: string
  category2: string
  categoryName: string
  httpStatusCode: number
  maxPrice: number
  minPrice: number
  specifications: FilterSpecification[]
  success: boolean
}
