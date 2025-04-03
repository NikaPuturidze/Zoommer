import { Component, HostListener, OnInit } from '@angular/core'
import { ApiService } from '../../../api.service'
import { MegaMenu } from '@zoommer/shared/interfaces/mega-menu.interface'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-categories',
  imports: [RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  public cIndex = 1
  public viewportWidth = 0
  public inside = false
  public megaMenu: MegaMenu[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.megaMenu().subscribe((response: MegaMenu[]) => {
      this.megaMenu = response.sort((a, b) => a.order - b.order)
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.viewportWidth = window.innerWidth
  }

  @HostListener('mouseenter')
  enter() {
    this.inside = true
  }

  @HostListener('mouseleave')
  leave() {
    this.inside = false
  }

  getCategory(index: number) {
    this.cIndex = index
  }

  getHeightBefore() {
    const heightBefore = ['535.5px', '409.5px', '580px', '745.5px', '483px', '483px', '378px', '378px']
    return heightBefore[this.cIndex]
  }
}
