export interface ICustomer {
  id: string;
  cpf: string;
  cnpj?: string;
  name: string;
  birth: string;
  cel: string;
  email: string;
  cep: string;
  state: string;
  city: string;
  address: string;
  neighborhood: string;
  number: string;
  complement: string;
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
