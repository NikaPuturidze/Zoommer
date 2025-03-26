import { Routes } from '@angular/router'
import { MainComponent } from './main/main.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Zoommer.ge',
  },
  {
    path: ':category/:id',
    component: ProductDetailsComponent,
    title: 'Zoommer.ge',
  },
]
