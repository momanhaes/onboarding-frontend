import { Component, OnInit } from '@angular/core';
import { APPEARD } from '../shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from '../shared/animations/list.animation';
import { IStyleguideRoute } from '../shared/interfaces/styleguide.interface';
import { WindowService } from '../shared/services/window.service';
import { ROUTES } from './styleguide.content';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class StyleguideComponent implements OnInit {
  public routes: IStyleguideRoute[] = ROUTES;
  public state: string = 'ready';
  public show: boolean = false;
  public isMobile: boolean;

  constructor(private windowService: WindowService) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
  }

  ngOnInit() {
    setTimeout(() => { this.show = true; }, 0);
    this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
  }
}
