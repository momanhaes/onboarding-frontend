import { Directive, HostListener } from '@angular/core';
import { WindowService } from '../services/window.service';

@Directive({
  selector: '[resize]',
})
export class ResizeDirective {
  constructor(private win: WindowService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const target = event.target as Window;
    this.win.isMobile.emit(target.innerWidth <= this.win.widthMobile);
  }
}
