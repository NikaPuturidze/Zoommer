export interface MegaMenu {
  id: number
  name: string
  route: string
  categoryId: number
  imageId: number | null
  imageUrl: string | null
  iconId: number | null
  iconUrl: string | null
  parentItemId: number | null
  order: number
  childItems: MegaMenu[] | null
}
