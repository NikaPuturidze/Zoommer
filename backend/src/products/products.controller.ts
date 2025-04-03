import { Controller, Get, Query } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller()
export class ProductsController {
  constructor(private readonly productsSevice: ProductsService) {}

  @Get('/products')
  async products(
    @Query('catId') catId: number,
    @Query('maxPrice') maxPrice?: string,
    @Query('minPrice') minPrice?: string,
    @Query('nameAsc') nameAsc?: string,
    @Query('priceAsc') priceAsc?: string
  ) {
    return this.productsSevice.getProducts(catId, maxPrice, minPrice, nameAsc, priceAsc)
  }
}
