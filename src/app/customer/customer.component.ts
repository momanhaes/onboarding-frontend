import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { ICustomerContent } from '../shared/interfaces/customer.interface';
import { WindowService } from '../shared/services/window.service';
import { CUSTOMER_CONTENT } from './customer.content';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class CustomerComponent implements OnInit {
  public subscribeMobile!: Subscription;
  public isMobile!: boolean;
  public show!: boolean;
  public state = 'ready';

  constructor(private windowService: WindowService) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
  }

  public get content(): ICustomerContent[] {
    return CUSTOMER_CONTENT;
  }

  ngOnInit() {
    setTimeout(() => { this.show = true; }, 0);
    this.subscribeMobile = this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
  }
}
