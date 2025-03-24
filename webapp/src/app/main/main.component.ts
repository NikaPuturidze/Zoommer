import { Component } from '@angular/core'
import { SectionMainComponent } from './section-main/section-main.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SectionMainComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
