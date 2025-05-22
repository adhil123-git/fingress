import { Directive, ElementRef, HostListener,inject} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})  
export class CustomdirectiveDirective {
 private el = inject(ElementRef);
 private color(color: string) {
    this.el.nativeElement.style.color = color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.color('red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.color('');
  }

}