export interface IInput {
  label: string;
  placeholder: string;
  control: string;
  groupControl: string;
  required: boolean;
  class: string;
  type: string;
  disabled: boolean;
}

export const GENERAL_INPUTS: IInput[] = [
  {
    class: 'input col-12 col-md-12',
    label: 'Nome',
    placeholder: 'Digite o nome com sobrenome',
    control: 'name',
    groupControl: '',
    type: 'text',
    required: true,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-4',
    label: 'CPF',
    placeholder: 'Digite o CPF',
    control: 'cpf',
    groupControl: '',
    type: 'text',
    required: true,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-4',
    label: 'CNPJ',
    placeholder: 'Digite o CNPJ',
    control: 'cnpj',
    groupControl: '',
    type: 'text',
    required: false,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-4',
    label: 'Data de Nascimento',
    placeholder: 'Digite a data de nascimento',
    control: 'birth',
    groupControl: '',
    type: 'text',
    required: false,
    disabled: false,
  },
];

export const CONTACT_INPUTS: IInput[] = [
  {
    class: 'input col-12 col-md-6',
    label: 'Celular',
    placeholder: 'Digite o celular com DDD',
    control: 'cel',
    groupControl: 'contact',
    type: 'text',
    required: true,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-6',
    label: 'E-mail',
    placeholder: 'Digite o e-mail',
    control: 'email',
    groupControl: 'contact',
    type: 'email',
    required: true,
    disabled: false,
  },
];

export const ADDRESS_INPUTS: IInput[] = [
  {
    class: 'input col-12 col-md-3',
    label: 'CEP',
    placeholder: 'Digite o CEP',
    control: 'cep',
    groupControl: 'address',
    type: 'text',
    required: true,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Estado',
    placeholder: 'Digite o nome do estado',
    control: 'state',
    groupControl: 'address',
    type: 'text',
    required: true,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Cidade',
    placeholder: 'Digite o nome da cidade',
    control: 'city',
    groupControl: 'address',
    type: 'text',
    required: true,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Bairro',
    placeholder: 'Digite o nome do bairro',
    control: 'neighborhood',
    groupControl: 'address',
    type: 'text',
    required: true,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-6',
    label: 'Nome da Rua',
    placeholder: 'Digite o nome da rua',
    control: 'address',
    groupControl: 'address',
    type: 'text',
    required: true,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-4',
    label: 'Complemento',
    placeholder: 'Digite o complemento',
    control: 'complement',
    groupControl: 'address',
    type: 'text',
    required: false,
    disabled: false,
  },
  {
    class: 'input col-12 col-md-2',
    label: 'Número',
    placeholder: 'Digite o número ou S/N',
    control: 'number',
    groupControl: 'address',
    type: 'text',
    required: false,
    disabled: false,
  },
];
