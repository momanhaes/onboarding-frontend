import { ICustomerContent } from '../shared/interfaces/customer.interface';

export const CUSTOMER_CONTENT: ICustomerContent[] = [
  {
    route: '/customer/list',
    icon: 'group',
    label: 'Listar Clientes',
  },
  {
    route: '/customer/add',
    icon: 'person_add',
    label: 'Adicionar Cliente',
  },
];
