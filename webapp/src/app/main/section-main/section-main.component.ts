import { Component } from '@angular/core'
import { CategoriesComponent } from './categories/categories.component'
import { ImageCarouselComponent } from './image-carousel/image-carousel.component'

@Component({
  selector: 'app-section-main',
  standalone: true,
  imports: [CategoriesComponent, ImageCarouselComponent],
  templateUrl: './section-main.component.html',
  styleUrl: './section-main.component.scss',
})
export class SectionMainComponent {}
