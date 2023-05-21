import { Component, OnInit } from '@angular/core';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { IStyleguideColor } from 'src/app/shared/interfaces/styleguide.interface';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { StyleguideService } from '../styleguide.service';
import { COLORS } from '../styleguide.content';

@Component({
  selector: 'app-colors-page',
  templateUrl: './colors-page.component.html',
  styleUrls: ['./colors-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class ColorsPageComponent implements OnInit {
  public content: IStyleguideColor[] = COLORS;
  public state: string = 'ready';
  public show!: boolean;

  constructor(private styleguideService: StyleguideService) {}
  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public clip(color: IStyleguideColor): void {
    this.styleguideService.clipColor(color);
  }
}
