import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appGrade]',
  standalone: true
})
export class GradeDirective {

  @Input() mark = 0;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.mark >= 90) {
      this.el.nativeElement.style.color = 'green';
    } else if (this.mark >= 80) {
      this.el.nativeElement.style.color = 'blue';
    } else if (this.mark >= 70) {
      this.el.nativeElement.style.color = 'orange';
    } else if (this.mark >= 60) {
      this.el.nativeElement.style.color = 'red';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
