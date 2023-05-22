export interface ICustomer {
  id: string;
  cpf: string;
  cnpj: string;
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

export interface ICustomerRoute {
  route: string;
  icon: string;
  label: string;
}

export interface ICustomerInput {
  label: string;
  placeholder: string;
  control: string;
  required: boolean;
  class: string;
  type: string;
  disabled: boolean;
  mask: string;
}
