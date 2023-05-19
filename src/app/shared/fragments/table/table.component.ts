import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { CustomerService } from '../../services/customer.service';
import { ICustomer, ICustomerEvent } from '../../interfaces/customer.interface';

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
  @Input() public showPagination: boolean = true;

  public dataSource!: MatTableDataSource<ICustomer>;
  public state = 'ready';

  public displayedColumns: string[] = [
    'name',
    'email',
    'age',
    'phone',
    'img',
  ];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);

    this.customerService.notifier.subscribe((event: ICustomerEvent) => {
      this.dataSource = new MatTableDataSource(event.customers);
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
    }
  }
}
