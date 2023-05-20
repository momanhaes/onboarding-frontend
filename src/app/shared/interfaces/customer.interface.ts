interface ICustomerAddress {
  cep: string;
  state: string;
  city: string;
  address: string;
  number: string;
  complement: string;
}

interface ICustomerContact {
  ddd: number;
  cel: string;
  email: string;
}

export interface ICustomer {
  id: string;
  cpf: string;
  cnpj?: string;
  name: string;
  birth: string;
  age: number;
  img: string;
  contact: ICustomerContact;
  address: ICustomerAddress;
}

export interface ICustomerEvent {
  customers: ICustomer[];
  searchTerm: string;
}

export interface ICustomerContent {
  route: string;
  icon: string;
  label: string;
}
