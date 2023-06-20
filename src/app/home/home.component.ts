import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { ISocialNetwork } from 'src/app/shared/interfaces/shared.interface';
import { SOCIAL_CONTENT } from 'src/app/shared/shared.content';
import { HelperLib } from '../shared/lib/helper.lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [APPEARD],
})
export class HomeComponent implements OnInit {
  public show: boolean = false;
  public state: string = 'ready';
  public content: ISocialNetwork[] = SOCIAL_CONTENT;

  constructor(private helper: HelperLib) { }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public goTo(url: string): void {
    this.helper.goTo(url);
  }
}
