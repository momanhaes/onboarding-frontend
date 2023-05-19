import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [APPEARD],
})
export class HomeComponent {
  public state = 'ready';
}
