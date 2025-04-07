import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appScaleOnClick]',
})
export class ScaleOnClickDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mousedown') onMouseDown() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(0.95)')
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.12s ease-in-out')
  }

  @HostListener('mouseup') onMouseUp() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)')
  }
}
