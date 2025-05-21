import { Directive, ElementRef, HostListener,inject} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})  
export class CustomdirectiveDirective {
 private el = inject(ElementRef);
 private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

}