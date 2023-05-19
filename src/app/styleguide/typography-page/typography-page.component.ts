import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { ITypography, TYPOGRAPHY } from './typography-page.content';

@Component({
  selector: 'app-typography-page',
  templateUrl: './typography-page.component.html',
  styleUrls: ['./typography-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class TypographyPageComponent implements OnInit {
  public state = 'ready';
  public show!: boolean;

  constructor(private toasty: ToastyService) {}

  public get typography(): ITypography[] {
    return TYPOGRAPHY;
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public clip(code: string): void {
    this.clipboard(code);
    this.toasty.show({ text: `${code} copiado!` });
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
