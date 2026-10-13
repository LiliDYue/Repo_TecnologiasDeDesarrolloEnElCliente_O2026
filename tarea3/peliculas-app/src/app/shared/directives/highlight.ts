
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'translateY(-4px)'
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'box-shadow',
      '0 8px 20px rgba(0, 0, 0, 0.15)'
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'transition',
      'transform 0.2s ease, box-shadow 0.2s ease'
    );
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.removeStyle(this.element.nativeElement, 'transform');
    this.renderer.removeStyle(this.element.nativeElement, 'box-shadow');
  }
}
