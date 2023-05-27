import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { LocalStorageService, KeyType } from './local-storage.service';
import { CUSTOMERS_MOCK } from 'src/app/customer/customer.mock';

describe('CustomerService', () => {
  let service: CustomerService;
  let localStorageService: LocalStorageService;
  const customerMock = CUSTOMERS_MOCK[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService, LocalStorageService]
    });
    service = TestBed.inject(CustomerService);
    localStorageService = TestBed.inject(LocalStorageService);
  });

  beforeEach(() => {
    localStorageService.set(KeyType.MOCK, CUSTOMERS_MOCK);
  });

  it('Deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar os clientes do local storage', () => {
    const customers = service.getCustomers();
    expect(customers).toEqual(CUSTOMERS_MOCK);
  });

  it('Deve criar o mock no local storage', () => {
    localStorageService.remove(KeyType.MOCK);
    service.getCustomers();
    const customers = localStorageService.get(KeyType.MOCK);
    expect(customers).toEqual(CUSTOMERS_MOCK);
  });

  it('Deve criar um novo cliente', () => {
    const customers = service.getCustomers();
    const createdCustomer = customers.find(customer => customer.name === 'João Silva');
    expect(createdCustomer).toBeTruthy();
  });

  describe('Quando um cliente é criado', () => {
    beforeEach(() => {
      service.createCustomer(customerMock);
    });

    it('Deve retornar um cliente pelo ID', () => {
      const customerId = '21';
      const expectedCustomer = customerMock;
      const customer = service.getCustomerById(customerId);
      expect(customer).toEqual(expectedCustomer);
    });

    it('Deve editar um cliente', () => {
      const customerId = '21';
      const customer = service.getCustomerById(customerId);
      customer.name = 'João Silva';
      service.updateCustomer(customer);
      const updatedCustomer = service.getCustomerById(customerId);
      expect(updatedCustomer.name).toEqual('João Silva');
    });
  });

  it('Deve excluir um cliente', () => {
    const customerId = '21';
    service.deleteCustomer(customerId);
    const customers = service.getCustomers();
    const deletedCustomer = customers.find(customer => customer.id === customerId);
    expect(deletedCustomer).toBeFalsy();
  });

  it('Deve emitir o evento de filtragem dos clientes', () => {
    const searchTerm = 'João Silva';
    const notifierSpy = spyOn(service.notifier, 'emit');
    service.filterCustomersEvent([customerMock], searchTerm);
    expect(notifierSpy).toHaveBeenCalledWith({ customers: [customerMock], searchTerm: searchTerm });
  });
});