import { Controller, Get, Query } from '@nestjs/common'
import { DetailsService } from './details.service'

@Controller('details')
export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}

  @Get()
  async products(@Query('productId') productId: number) {
    return this.detailsService.getProductDetails(productId)
  }
}
