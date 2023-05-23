import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { CustomerService } from '../../services/customer.service';
import { ICustomer, ICustomerEvent } from '../../interfaces/customer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [APPEARD],
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  @ViewChild(MatTable) public table!: MatTable<ICustomer>;
  @ViewChild(MatSort) public sort!: MatSort;
  
  @Input() public data!: ICustomer[];

  public dataSource!: MatTableDataSource<ICustomer>;
  public state = 'ready';

  public displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'state',
    'cel',
    'edit',
  ];

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);

    this.customerService.notifier.subscribe((event: ICustomerEvent) => {
      this.dataSource.data = event.customers;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    if (this.table?.dataSource) { this.table.dataSource = this.dataSource; }

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
}
