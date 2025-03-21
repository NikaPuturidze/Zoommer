export interface SubCategory {
  id: number
  name: string
  categoryId: number
}

export interface CategoryGroup {
  id: number
  name: string
  img: string
  thumbUrl: string
  height: string
  heightAfter: string
}

export interface Category {
  id: number
  title: string
  viewAll: string | null
  subCategories: SubCategory[]
  categoryGroup: CategoryGroup
}

export interface CategoryResponse {
  img: string
  thumbUrl: string
  height: string
  heightAfter: string
  name: string
  categories: {
    title: string
    viewAll: string | null
    subCategories: string[]
  }[]
}
