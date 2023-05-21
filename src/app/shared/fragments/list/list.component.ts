import { Component, Input, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { CustomerService } from '../../services/customer.service';
import { ICustomer, ICustomerEvent } from '../../interfaces/customer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [APPEARD],
})
export class ListComponent implements OnInit {
  public state = 'ready';

  @Input() data!: ICustomer[];

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.notifier.subscribe((event: ICustomerEvent) => this.data = event.customers);
  }

  public edit(customer: ICustomer): void {
    if (!customer.id) { return; }
    
    this.router.navigate(['/customer/register', customer.id]);
  }
}
