export interface ProductResponse extends Object {
  product: Product
  availabilityInStores: availabilityInStores
}

export interface availabilityInStores {
  address: string
  branchName: string
  city: string
  id: number
  inStock: boolean
  phoneNumber: string
  workingHoursMonToSat: string
  workingHoursSun: string
}

export interface Product {
  id: number
  name: string
  barCode: string
  description: any
  sellType: string
  maxQuantityInCart: number
  price: number
  previousPrice?: number | null
  categoryId: number
  doNotRecordStock: boolean
  categoryIds: number[]
  parentCategoryName: string
  categoryName: string
  subCategoryId: number
  releaseDate: any
  storageQuantity: number
  requestedQuantity: number
  promotionQuantity: number
  imageUrl: string
  shopId: number
  shopName: string
  images: string[]
  isPurchased: boolean
  orderNo: number
  discountPercent: number
  hasDiscount: boolean
  discountAmount: number
  discountType: any
  isFavorite: boolean
  preSalePrice: any
  onSale: boolean
  isKyosk: boolean
  badges: any
  badgeIds: any
  disableBuyButton: boolean
  onSaleSoon: boolean
  h1: string
  metaDescription: any
  metaTitle: string
  metaUrlName: any
  specificationGroup: SpecificationGroup[]
  mainSpecification: MainSpecification[]
  keySpecification: any[]
  similarProductsList: similarProductsList[]
  bundles: Bundle[]
  accessories: Accessory[]
  bundleTotalPreviousPrice: number
  isBooked: boolean
  videoUrls: any[]
  bookingDateTo: any
  isInCart: boolean
  bundleIsInCart: boolean
  bundleRequestedQuantity: number
  isPriceSubscribed: boolean
  isStockSubscribed: boolean
  categoryRoute: any
  route: string
  routeGe: string
  routeEn: string
  routeRu: string
  shareRoute: any
  brandName: any
  brandPhotoUrl: any
  promotionFinishDate: any
  isNightPromotion: boolean
  breadcrumbs: Breadcrumb[]
  gifts: any
  giftType: any
  imageAlt: any
  labelText: any
  labelColor: any
  iconUrl: any
  routeIsNotValid: any
  subCategoryName: string
  manualsFileUrl: any
  certificateFileUrl: any
  productFrame: any
  productFrameResponsive: any
  productDetailsFrame: any
  productHorizontalFrame: any
  productHorizontalFrameResponsive: any
}

export interface SpecificationGroup {
  id: number
  groupName: string
  orderNo: number
  isActive: boolean | null
  specifications: Specification[]
}

export interface Specification {
  id: number
  isInProductPage: boolean
  specificationGroupId: number
  specificationName: string
  orderNo: number
  isColor: boolean
  colorValue?: string | null
  specificationMeaningId: number
  specificationMeaning: string
  isMainSpecification: boolean
  mainSpecificationOrderNo?: number | null
  specificationLinkedUrl?: string | null
}

export interface MainSpecification {
  id: number
  specificationName: string
  specificationMeaning: string
  orderNo: number
}

export interface KeySpecification {
  specificationName: string
  isColor: boolean
  specificationMeaning: string
  orderNo: number
  specificationMeaningsList: SpecificationMeaning[]
}

export interface SpecificationMeaning {
  isColor: boolean
  value: string
  isSelected: boolean
  productId: number
  orderNo: number
  route: string
}

export interface SimilarProduct {
  productId: number
  price: number
  previousPrice: number | null
  imageUrls: string[]
  onSaleSoon: boolean
  disableBuyButton: boolean
  productName: string
  storageQuantity: number
  isFavorite: boolean
  requestedQuantity: number
  isInCart: boolean
  route: string
  labelColor: string | null
  labelText: string | null
  iconUrl: string | null
}

export interface Bundle {
  id: number
  categoryId: number
  discountAmount: number
  discountIsPercent: boolean
  isMain: boolean
  orderNo: number
  productId: number
  productName: string
  productUrl: string
  productPrice: number
  productSalePrice: number
  productPriceWithoutLogic: number
  isInCart: boolean
  isFavorite: boolean
  disableBuyButton: boolean
  onSaleSoon: boolean
  storageQuantity: number
  requestedQuantity: number
  categories: any
  route: string
  labelColor?: string
  labelText?: string
  iconUrl?: string
}

export interface Accessory {
  id: number
  categoryId: number
  discountAmount: number
  discountIsPercent: boolean
  isMain: boolean
  orderNo: number
  productId: number
  productName: string
  productUrl: string
  productPrice: number
  productSalePrice: number
  productPriceWithoutLogic: number
  isInCart: boolean
  isFavorite: boolean
  disableBuyButton: boolean
  onSaleSoon: boolean
  storageQuantity: number
  requestedQuantity: number
  categories: any
  route: string
  labelColor?: string
  labelText?: string
  iconUrl?: string
}

export interface similarProductsList {
  disableBuyButtom: boolean
  iconUrl: string | null
  imageUrls: string[]
  isFavorite: boolean
  isInCart: boolean
  labelColor: string | null
  labelText: string | null
  onSaleSoon: boolean
  previousPrice: string | null
  price: number
  productId: number
  productName: string
  requestedQuantity: number
  route: string
  storageQuantity: number
}

export interface Breadcrumb {
  id: number
  name: string
  route: string
  imageUrl: string
}
