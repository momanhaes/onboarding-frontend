import { Injectable } from '@angular/core';
import { ToastyService } from './toasty.service';
import { IStyleguideColor } from '../interfaces/styleguide.interface';

@Injectable({ providedIn: 'root' })
export class StyleguideService {
  constructor(private toastyService: ToastyService) {}

  public clip(code: string): void {
    this.clipboard(code);
    this.toastyService.show({ text: `${code} copiado!` });
  }

  public clipColor(color: IStyleguideColor): void {
    this.clipboard(`$${color.name}: ${color.hex}`);
    this.toastyService.show({ text: `$${color.name}: ${color.hex} copiado!` });
  }

  public clipboard(word: string): void {
    const el = document.createElement('textarea');
    el.value = word;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
