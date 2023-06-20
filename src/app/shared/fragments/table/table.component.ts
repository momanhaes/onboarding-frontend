import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { CustomerService } from '../../services/customer.service';
import { ICustomer, ICustomerEvent } from '../../interfaces/customer.interface';
import { GithubService } from '../../services/github.service';
import { IRepo, IRepoEvent } from '../../interfaces/profile.interface';
import { HelperLib } from '../../lib/helper.lib';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [APPEARD],
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable) public reposTable!: MatTable<IRepo>;
  @ViewChild(MatTable) public customerTable!: MatTable<ICustomer>;

  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  @ViewChild(MatSort) public sort!: MatSort;

  @Input() public repos: IRepo[] = [];
  @Input() public customers: ICustomer[] = [];
  @Input() public isProfile: boolean = false;

  public customerDataSource!: MatTableDataSource<ICustomer>;
  public reposDataSource!: MatTableDataSource<IRepo>;

  public displayedColumns: string[] = [];
  public state: string = 'ready';

  constructor(private router: Router, private customerService: CustomerService, private gitHubService: GithubService, private helper: HelperLib) { }

  ngOnInit(): void {
    if (this.isProfile) {
      this.reposDataSource = new MatTableDataSource(this.repos);
    } else {
      this.customerDataSource = new MatTableDataSource(this.customers);
    }

    this.setDisplayedColumns();

    this.customerService.notifier.subscribe((event: ICustomerEvent) => {
      this.customerDataSource.data = event.customers;
    });

    this.gitHubService.notifier.subscribe((event: IRepoEvent) => {
      this.reposDataSource.data = event.repos;
    });
  }

  ngAfterViewInit(): void {
    if (this.isProfile) {
      this.reposDataSource.sort = this.sort;
      this.reposDataSource.paginator = this.paginator;
      if (this.reposTable?.dataSource) { this.reposTable.dataSource = this.reposDataSource; }
    } else {
      this.customerDataSource.sort = this.sort;
      this.customerDataSource.paginator = this.paginator;
      if (this.customerTable?.dataSource) { this.customerTable.dataSource = this.customerDataSource; }
    }

    const paginator = this.paginator?._intl;

    if (paginator) {
      paginator.previousPageLabel = 'Anterior';
      paginator.nextPageLabel = 'Próximo';
      paginator.lastPageLabel = 'Último';
      paginator.firstPageLabel = 'Primeiro';
      paginator.itemsPerPageLabel = 'Itens por página';
      paginator.getRangeLabel = this.getPaginatorRangeLabel;
    }
  }

  public setDisplayedColumns(): void {
    this.displayedColumns = this.isProfile ? ['name', 'description', 'forks', 'language', 'url',] : ['id', 'name', 'email', 'state', 'cel', 'edit',];
  }

  public getPaginatorRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) { return `0 de ${length}`; }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }

  public getTooltip(customer: ICustomer): string {
    if (!customer.id) { return ''; }

    return `Editar ${customer.name}`;
  }

  public edit(customer: ICustomer): void {
    if (!customer.id) { return; }

    this.router.navigate(['/customer/register', customer.id]);
  }

  public goTo(url: string): void {
    this.helper.goTo(url);
  }
}
