import { ICustomerRoute, ICustomerInput } from 'src/app/shared/interfaces/customer.interface';

export const ROUTES: ICustomerRoute[] = [
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

export enum EMasks {
  CPF = '000.000.000-00',
  CNPJ = '00.000.000/0000-00',
  BIRTH = '00/00/0000',
  CEL = '(00) 00000-0000',
  CEP = '00000-000',
}

export const GENERAL_INPUTS: ICustomerInput[] = [
  {
    class: 'input col-12 col-md-12',
    label: 'Nome',
    placeholder: 'Digite o nome com sobrenome',
    control: 'name',
    type: 'text',
    required: true,
    disabled: false,
    mask: '',
  },
  {
    class: 'input col-12 col-md-4',
    label: 'CPF',
    placeholder: 'Digite o CPF',
    control: 'cpf',
    type: 'text',
    required: true,
    disabled: false,
    mask: EMasks.CPF,
  },
  {
    class: 'input col-12 col-md-4',
    label: 'CNPJ',
    placeholder: 'Digite o CNPJ',
    control: 'cnpj',
    type: 'text',
    required: false,
    disabled: false,
    mask: EMasks.CNPJ,
  },
  {
    class: 'input col-12 col-md-4',
    label: 'Data de Nascimento',
    placeholder: 'Digite a data de nascimento',
    control: 'birth',
    type: 'text',
    required: false,
    disabled: false,
    mask: EMasks.BIRTH,
  },
];

export const CONTACT_INPUTS: ICustomerInput[] = [
  {
    class: 'input col-12 col-md-6',
    label: 'Celular',
    placeholder: 'Digite o celular com DDD',
    control: 'cel',
    type: 'text',
    required: true,
    disabled: false,
    mask: EMasks.CEL,
  },
  {
    class: 'input col-12 col-md-6',
    label: 'E-mail',
    placeholder: 'Digite o e-mail',
    control: 'email',
    type: 'email',
    required: true,
    disabled: false,
    mask: '',
  },
];

export const ADDRESS_INPUTS: ICustomerInput[] = [
  {
    class: 'input col-12 col-md-3',
    label: 'Estado',
    placeholder: 'Digite o estado',
    control: 'state',
    type: 'text',
    required: true,
    disabled: false,
    mask: '',
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Cidade',
    placeholder: 'Digite a cidade',
    control: 'city',
    type: 'text',
    required: true,
    disabled: false,
    mask: '',
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Bairro',
    placeholder: 'Digite o bairro',
    control: 'neighborhood',
    type: 'text',
    required: true,
    disabled: false,
    mask: '',
  },
  {
    class: 'input col-12 col-md-6',
    label: 'Nome da Rua',
    placeholder: 'Digite o nome da rua',
    control: 'address',
    type: 'text',
    required: true,
    disabled: false,
    mask: '',
  },
  {
    class: 'input col-12 col-md-4',
    label: 'Complemento',
    placeholder: 'Digite o complemento',
    control: 'complement',
    type: 'text',
    required: false,
    disabled: false,
    mask: '',
  },
  {
    class: 'input col-12 col-md-2',
    label: 'Número',
    placeholder: 'Digite o número ou S/N',
    control: 'number',
    type: 'text',
    required: false,
    disabled: false,
    mask: '',
  },
];
