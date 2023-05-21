import { Component } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [APPEARD],
})
export class FooterComponent {
  public state = 'ready';
}
