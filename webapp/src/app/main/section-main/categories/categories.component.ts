import { Component, HostListener, OnInit } from '@angular/core'
import { ApiService } from '../../../api.service'
import { CategoryResponse } from '../../../../../../backend/src/category/category.interface'

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  public showingCategory = 0
  public categoryHeight = '0px'
  public viewportWidth = 0
  public categories: CategoryResponse[] = []

  ngOnInit(): void {
    this.apiService.getCategories().subscribe({
      next: (data) => {
        this.categories = data
      },
    })
  }

  constructor(private apiService: ApiService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.viewportWidth = window.innerWidth
  }

  enterCategory() {
    const currentCategory = this.categories[this.showingCategory]
    if (this.viewportWidth <= 1200) {
      this.categoryHeight = currentCategory.heightAfter
    } else {
      this.categoryHeight = currentCategory.height
    }
  }

  getCategory(index: number) {
    this.showingCategory = index
  }
}
