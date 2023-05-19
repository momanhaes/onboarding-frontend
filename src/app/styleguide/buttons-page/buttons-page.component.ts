import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { BUTTONS, IButton } from './buttons-page.content';

@Component({
  selector: 'app-buttons-page',
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class ButtonsPageComponent implements OnInit {
  public state = 'ready';
  public show!: boolean;

  constructor(private toasty: ToastyService) {}

  public get buttons(): IButton[] {
    return BUTTONS;
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
