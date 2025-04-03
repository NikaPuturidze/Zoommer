import { Controller, Get } from '@nestjs/common'
import { MegaMenuService } from './mega-menu.service'

@Controller()
export class MegaMenuController {
  constructor(private readonly megaMenuService: MegaMenuService) {}

  @Get('/mega-menu')
  getMegaMenu() {
    return this.megaMenuService.getMegaMenu()
  }
}
