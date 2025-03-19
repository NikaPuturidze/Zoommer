import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-image-carousel',
  imports: [],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss',
})
export class ImageCarouselComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      if (!this.inside) {
        this.nextImage()
      }
    }, 5000)
  }

  public imageIndex = 0
  public toMove = 0
  public translateX = ''
  public inside = false
  public imgGap = 30

  imageArray = [
    { src: 'assets/main/slider/image_1.webp', width: 0 },
    { src: 'assets/main/slider/image_2.webp', width: 0 },
    { src: 'assets/main/slider/image_3.webp', width: 0 },
    { src: 'assets/main/slider/image_4.webp', width: 0 },
    { src: 'assets/main/slider/image_5.webp', width: 0 },
    { src: 'assets/main/slider/image_6.webp', width: 0 },
    { src: 'assets/main/slider/image_7.webp', width: 0 },
  ]

  onImageLoad(event: Event, index: number) {
    const img = event.target as HTMLImageElement
    const visibleWidth = img.clientWidth
    this.imageArray[index].width = visibleWidth
  }

  enter() {
    this.inside = true
  }

  leave() {
    this.inside = false
  }

  sliderWidth() {
    let sliderWidth = 0
    for (let i = 0; i < this.imageArray.length - 1; i++) {
      sliderWidth += this.imageArray[i].width + this.imgGap
    }
    return sliderWidth
  }

  nextImage() {
    this.toMove += this.imageArray[this.imageIndex].width + this.imgGap
    if (this.imageIndex == this.imageArray.length - 1) {
      this.imageIndex = 0
      this.toMove = 0
    } else this.imageIndex++

    this.slide()
  }

  previousImage() {
    if (this.imageIndex == 0) {
      this.imageIndex = this.imageArray.length - 1
      this.toMove = this.sliderWidth()
    } else {
      this.imageIndex--
      if (this.imageIndex == this.imageArray.length) {
        this.toMove += -this.imageArray[this.imageIndex - 1].width - this.imgGap
      } else this.toMove += -this.imageArray[this.imageIndex].width - this.imgGap
    }
    this.slide()
  }

  slide() {
    this.translateX = `translateX(${-this.toMove}px)`
  }
}
