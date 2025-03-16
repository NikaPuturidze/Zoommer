import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService {
  private prisma = new PrismaClient()

  async onModuleDestroy() {
    await this.prisma.$disconnect()
  }
}
