import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { IStyleguideTypography } from 'src/app/shared/interfaces/styleguide.interface';
import { StyleguideService } from '../styleguide.service';
import { TYPOGRAPHY } from '../styleguide.content';

@Component({
  selector: 'app-typography-page',
  templateUrl: './typography-page.component.html',
  styleUrls: ['./typography-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class TypographyPageComponent implements OnInit {
  public content: IStyleguideTypography[] = TYPOGRAPHY;
  public state = 'ready';
  public show!: boolean;

  constructor(private styleguideService: StyleguideService) {}
  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public clip(code: string): void {
    this.styleguideService.clip(code);
  }
}
