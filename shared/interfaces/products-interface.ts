export interface Products {
  [productId: string]: Product
}

export interface Product {
  name: string
  metaTitle: string
  categoryName: string
  parentCategoryName: string
  subCategoryName: string
  barCode: string
  сategoryId: number
  id: number
  price: number
  route: string
  breadcrumbs: Breadcrumb[]
  imageUrl: string
  images: string[]
  mainSpecification: MainSpecification[]
  keySpecification: KeySpecification[]
  discountAmount: number
  discountPercent: number
  discountType: number
  hasDiscount: boolean
}

interface Breadcrumb {
  id: number
  name: string
  route: string
}

interface MainSpecification {
  id: number
  specificationName: string
  specificationMeaning: string
  orderNo: number
}
interface KeySpecification {
  specificationName: string
  specificationMeaning: string
  isColor: boolean
  orderNo: number
  specificationMeaningsList: SpecificationMeaningsList[]
}

interface SpecificationMeaningsList {
  isColor: boolean
  value: string
  isSelected: boolean
  productId: number
  orderNo: number
  route: string
}
