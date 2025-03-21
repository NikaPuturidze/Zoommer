import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Category, CategoryResponse } from './category.interface'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategories(): Promise<CategoryResponse[]> {
    let categories: Category[] = []

    try {
      categories = await this.prisma.category.findMany({
        include: {
          categoryGroup: true,
          subCategories: true,
        },
      })
    } catch (error) {
      throw new Error('Failed to fetch categories', error)
    }

    if (!categories || categories.length === 0) {
      return []
    }

    const groupedCategories = categories.reduce(
      (result, category) => {
        const groupName = category.categoryGroup.name
        const groupImg = category.categoryGroup.img
        const groupThumbUrl = category.categoryGroup.thumbUrl
        const groupHeight = category.categoryGroup.height
        const groupHeightAfter = category.categoryGroup.heightAfter

        if (!result[groupName]) {
          result[groupName] = {
            img: groupImg,
            thumbUrl: groupThumbUrl,
            height: groupHeight,
            heightAfter: groupHeightAfter,
            name: groupName,
            categories: [],
          }
        }

        result[groupName].categories.push({
          title: category.title,
          viewAll: category.viewAll,
          subCategories: category.subCategories.map((subCategory) => subCategory.name),
        })

        return result
      },
      {} as Record<string, CategoryResponse>
    )

    return Object.values(groupedCategories)
  }
}
