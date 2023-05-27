import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { IStyleguidePipe } from 'src/app/shared/interfaces/styleguide.interface';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { PIPES } from '../styleguide.content';

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
  styleUrls: ['./pipes-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class PipesPageComponent implements OnInit {
  public content: IStyleguidePipe[] = PIPES;
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
