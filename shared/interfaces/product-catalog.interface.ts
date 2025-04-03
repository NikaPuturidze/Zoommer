export interface Product {
  id: number
  name: string
  barCode: string
  price: number
  previousPrice?: number | null
  categoryId: number
  parentCategoryName: string
  categoryName: string
  subCategoryId: number
  storageQuantity: number
  imageUrl: string
  discountPercent: number
  hasDiscount: boolean
  discountAmount: number
  isFavorite: boolean
  preSalePrice?: number | null
  onSale: boolean
  isKyosk: boolean
  disableBuyButton: boolean
  onSaleSoon: boolean
  bundleTotalPreviousPrice?: number
  isBooked: boolean
  route: string
  isNightPromotion: boolean
  labelText?: string | null
  labelColor?: string | null
}

export interface ProductWrapper {
  product: Product
}
