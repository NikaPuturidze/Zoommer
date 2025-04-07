import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ScaleOnClickDirective } from '../shared/directives/scale-on-click.directive'

@Component({
  selector: 'app-header',
  imports: [RouterModule, ScaleOnClickDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
