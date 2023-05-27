import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { IStyleguideItem } from 'src/app/shared/interfaces/styleguide.interface';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { ITEMS } from '../styleguide.content';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class ItemsPageComponent implements OnInit {
  public content: IStyleguideItem[] = ITEMS;
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
