import { Injectable, OnModuleInit } from '@nestjs/common'
import { MongoClient, Db } from 'mongodb'

@Injectable()
export class ProductsService implements OnModuleInit {
  private client: MongoClient
  private db: Db

  constructor() {
    this.client = new MongoClient(this.getEnvVar('DATABASE_URL'))
  }

  private getEnvVar(key: string): string {
    if (process.env[key]) {
      return process.env[key]
    } else {
      throw new Error(`Env ${key} is not defined`)
    }
  }

  async onModuleInit() {
    try {
      await this.client.connect()
      this.db = this.client.db('Zoommer')
    } catch (err) {
      throw new Error('MongoDB connection failed', err as Error)
    }
  }

  public async getProducts(
    subCategory: number,
    maxPrice?: string,
    minPrice?: string,
    nameAsc?: string,
    priceAsc?: string
  ) {
    try {
      const projection = {
        _id: 0,
        availabilityInStores: 0,
        'product.description': 0,
        'product.maxQuantityInCart': 0,
        'product.doNotRecordStock': 0,
        'product.requestedQuantity': 0,
        'product.isPurchased': 0,
        'product.orderNo': 0,
        'product.sellType': 0,
        'product.categoryIds': 0,
        'product.releaseDate': 0,
        'product.promotionQuantity': 0,
        'product.shopId': 0,
        'product.shopName': 0,
        'product.images': 0,
        'product.discountType': 0,
        'product.badges': 0,
        'product.badgeIds': 0,
        'product.h1': 0,
        'product.metaDescription': 0,
        'product.metaTitle': 0,
        'product.specificationGroup': 0,
        'product.mainSpecification': 0,
        'product.keySpecification': 0,
        'product.similarProductsList': 0,
        'product.bundles': 0,
        'product.accessories': 0,
        'product.videoUrls': 0,
        'product.bundleRequestedQuantity': 0,
        'product.categoryRoute': 0,
        'product.routeGe': 0,
        'product.routeEn': 0,
        'product.routeRu': 0,
        'product.shareRoute': 0,
        'product.brandName': 0,
        'product.brandPhotoUrl': 0,
        'product.promotionFinishDate': 0,
        'product.breadcrumbs': 0,
        'product.gifts': 0,
        'product.giftType': 0,
        'product.imageAlt': 0,
        'product.iconUrl': 0,
        'product.routeIsNotValid': 0,
        'product.subCategoryName': 0,
        'product.manualsFileUrl': 0,
        'product.certificateFileUrl': 0,
        'product.productFrame': 0,
        'product.productFrameResponsive': 0,
        'product.productDetailsFrame': 0,
        'product.productHorizontalFrame': 0,
        'product.productHorizontalFrameResponsive': 0,
        'product.isPriceSubscribed': 0,
        'product.bundleIsInCart': 0,
        'product.bookingDateTo': 0,
        'product.isInCart': 0,
        'product.metaUrlName': 0,
        'product.isStockSubscribed': 0,
      }

      /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
      const filter: any = {
        'product.subCategoryId': Number(subCategory),
        'product.storageQuantity': { $ne: 0 },
      }

      if (maxPrice !== undefined && maxPrice !== '') {
        filter['product.price'] = { ...filter['product.price'], $lte: Number(maxPrice) }
      }
      if (minPrice !== undefined && minPrice !== '') {
        filter['product.price'] = { ...filter['product.price'], $gte: Number(minPrice) }
      }

      /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

      const sort: { [key: string]: 1 | -1 } = {}
      if (nameAsc !== undefined && nameAsc !== '') {
        sort['product.name'] = nameAsc === 'true' ? 1 : -1
      }
      if (priceAsc !== undefined && priceAsc !== '') {
        sort['product.price'] = priceAsc === 'true' ? 1 : -1
      }

      const products = await this.db.collection('ProductsGE').find(filter, { projection }).sort(sort).toArray()

      return products
    } catch (err) {
      throw new Error('Failed to fetch products', err as Error)
    }
  }
}
