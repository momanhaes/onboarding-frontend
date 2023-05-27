import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { IStyleguideIcon } from 'src/app/shared/interfaces/styleguide.interface';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { ICONS } from '../styleguide.content';

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class IconsPageComponent implements OnInit {
  public content: IStyleguideIcon[] = ICONS;
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
