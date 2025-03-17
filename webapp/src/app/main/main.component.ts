import { Component } from '@angular/core'
import { ImageSliderComponent } from './image-slider/image-slider.component'

@Component({
  selector: 'app-main',
  imports: [ImageSliderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
