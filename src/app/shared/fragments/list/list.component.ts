import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { CustomerService } from '../../services/customer.service';
import { ICustomer, ICustomerEvent } from '../../interfaces/customer.interface';
import { IRepo, IRepoEvent } from '../../interfaces/profile.interface';
import { GithubService } from '../../services/github.service';
import { HelperLib } from '../../lib/helper.lib';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [APPEARD],
})
export class ListComponent implements OnInit {
  @Input() repos: IRepo[] = [];
  @Input() customers: ICustomer[] = [];
  @Input() isProfile: boolean = false;
  
  public state: string = 'ready';

  constructor(private router: Router, private customerService: CustomerService, private gitHubService: GithubService, private helper: HelperLib) {}

  ngOnInit(): void {
    this.customerService.notifier.subscribe((event: ICustomerEvent) => this.customers = event.customers);
    this.gitHubService.notifier.subscribe((event: IRepoEvent) => this.repos = event.repos);
  }

  public edit(customer: ICustomer): void {
    if (!customer.id) { return; }
    
    this.router.navigate(['/customer/register', customer.id]);
  }

  public goTo(url: string): void {
    this.helper.goTo(url);
  }
}
