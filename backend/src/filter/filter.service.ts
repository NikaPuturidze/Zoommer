import { Injectable, OnModuleInit } from '@nestjs/common'
import { MongoClient, Db } from 'mongodb'

@Injectable()
export class FilterService implements OnModuleInit {
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

  public async getFilter(categoryId: number) {
    try {
      const [specifications, priceRange] = await Promise.all([
        this.db
          .collection('ProductsGE')
          .aggregate([
            {
              $match: { 'product.subCategoryId': categoryId },
            },
            {
              $unwind: '$product.specificationGroup',
            },
            {
              $unwind: '$product.specificationGroup.specifications',
            },
            {
              $match: {
                'product.specificationGroup.specifications.specificationLinkedUrl': { $ne: null },
                'product.storageQuantity': { $ne: 0 },
              },
            },
            {
              $group: {
                _id: '$product.specificationGroup.specifications.specificationName',
                id: { $first: '$product.specificationGroup.specifications.id' },
                category1: { $first: '$product.categoryName' },
                category2: { $first: '$product.subCategoryName' },
                values: {
                  $addToSet: {
                    id: '$product.specificationGroup.specifications.specificationMeaningId',
                    value: '$product.specificationGroup.specifications.specificationMeaning',
                  },
                },
              },
            },
            {
              $addFields: {
                categoryName: { $concat: ['$category2', '-', '$category1'] },
              },
            },
            {
              $project: {
                _id: 0,
                name: '$_id',
                id: 1,
                category1: 1,
                category2: 1,
                categoryName: 1,
                values: 1,
              },
            },
          ])
          .toArray(),

        this.db
          .collection('ProductsGE')
          .aggregate([
            {
              $match: {
                'product.subCategoryId': categoryId,
                'product.storageQuantity': { $ne: 0 },
              },
            },
            {
              $group: {
                _id: null,
                minPrice: { $min: '$product.price' },
                maxPrice: { $max: '$product.price' },
              },
            },
          ])
          .toArray(),
      ])

      let minPrice: number | null = null
      let maxPrice: number | null = null

      if (specifications.length === 0) {
        return {
          httpStatusCode: 404,
          success: false,
          errors: [`Category with ID ${categoryId} not found`],
        }
      } else {
        minPrice = (priceRange.length > 0 ? priceRange[0].minPrice : 0) as number
        maxPrice = (priceRange.length > 0 ? priceRange[0].maxPrice : 0) as number
      }

      return {
        category1: (specifications[0] as { category1?: string })?.category1,
        category2: (specifications[0] as { category2?: string })?.category2,
        categoryName: (specifications[0] as { categoryName?: string })?.categoryName,
        specifications,
        minPrice,
        maxPrice,
        httpStatusCode: 200,
        success: true,
      }
    } catch (error) {
      return {
        httpStatusCode: 500,
        success: false,
        errors: [(error as Error).message] as string[],
      }
    }
  }
}
