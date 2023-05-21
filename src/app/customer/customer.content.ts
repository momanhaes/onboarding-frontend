import { ICustomerContent } from '../shared/interfaces/customer.interface';

export const CUSTOMER_CONTENT: ICustomerContent[] = [
  {
    route: '/customer/list',
    icon: 'group',
    label: 'Listar Clientes',
  },
  {
    route: '/customer/register',
    icon: 'person_add',
    label: 'Registrar Cliente',
  },
];
