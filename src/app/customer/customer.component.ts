import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { WindowService } from '../shared/services/window.service';
import { ICustomerRoute } from '../shared/interfaces/customer.interface';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { ROUTES } from './customer.content';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class CustomerComponent implements OnInit {
  public routes: ICustomerRoute[] = ROUTES;
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
