import { Controller, Get, Query } from '@nestjs/common'
import { FilterService } from './filter.service'

@Controller()
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @Get('/filter')
  async filter(@Query('categoryId') categoryId: number) {
    if (!categoryId) {
      throw new Error('categoryId is required')
    }
    return this.filterService.getFilter(Number(categoryId))
  }
}
