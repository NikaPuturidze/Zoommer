import { Injectable } from '@nestjs/common'
import { products } from '../../shared/products-data'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  getProductById(id: string) {
    return products[id] || { message: 'Product not found' }
  }
}
