import { Routes } from '@angular/router'
import { MainComponent } from './main/main.component'
import { ProductCatalogComponent } from './product-catalog/product-catalog.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Zoommer.ge',
  },
  {
    path: ':category',
    component: ProductCatalogComponent,
    title: 'Zoommer.ge',
  },
  {
    path: ':category/:product',
    component: ProductDetailsComponent,
    title: 'Zoommer.ge',
  },
]
