import { Observable } from 'rxjs';
import { MOCK_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ICustomer, ICustomerEvent } from '../interfaces/customer.interface';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  public notifier = new EventEmitter<ICustomerEvent>();

  constructor(private http: HttpClient) {}

  public getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${MOCK_API}`);
  }

  public updateCustomersEvent(customers: ICustomer[], searchTerm: string): void {
    this.notifier.emit({ customers: customers, searchTerm: searchTerm });
  }
}
