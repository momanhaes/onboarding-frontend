import { Component, OnInit } from '@angular/core';
import { APPEARD } from '../shared/animations/appeard.animation';
import { IContent, STYLEGUIDE_CONTENT } from './styleguide.content';
import { LIST_ANIMATION_LATERAL } from '../shared/animations/list.animation';
import { WindowService } from '../shared/services/window.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class StyleguideComponent implements OnInit {
  public subscribeMobile!: Subscription;
  public isMobile!: boolean;
  public show!: boolean;
  public state = 'ready';

  constructor(private windowService: WindowService) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
  }

  public get content(): IContent[] {
    return STYLEGUIDE_CONTENT;
  }

  ngOnInit() {
    setTimeout(() => { this.show = true; }, 0);
    this.subscribeMobile = this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
  }
}
