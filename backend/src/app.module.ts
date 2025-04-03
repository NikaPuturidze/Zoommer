import { Module } from '@nestjs/common'
import { ProductsController } from './products/products.controller'
import { MegaMenuController } from './mega-menu/mega-menu.controller'
import { FilterController } from './filter/filter.controller'
import { ProductsService } from './products/products.service'
import { MegaMenuService } from './mega-menu/mega-menu.service'
import { FilterService } from './filter/filter.service'

@Module({
  imports: [],
  controllers: [ProductsController, MegaMenuController, FilterController],
  providers: [ProductsService, MegaMenuService, FilterService],
})
export class AppModule {}
