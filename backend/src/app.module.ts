import { Module } from '@nestjs/common'
import { ProductsController } from './products/products.controller'
import { MegaMenuController } from './mega-menu/mega-menu.controller'
import { FilterController } from './filter/filter.controller'
import { ProductsService } from './products/products.service'
import { MegaMenuService } from './mega-menu/mega-menu.service'
import { FilterService } from './filter/filter.service'
import { DetailsController } from './details/details.controller'
import { DetailsService } from './details/details.service'

@Module({
  imports: [],
  controllers: [ProductsController, MegaMenuController, FilterController, DetailsController],
  providers: [ProductsService, MegaMenuService, FilterService, DetailsService],
})
export class AppModule {}
