import { Routes } from '@angular/router'
import { MainComponent } from './main/main.component'
import { ProductCatalogComponent } from './product-catalog/product-catalog.component'
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
]
