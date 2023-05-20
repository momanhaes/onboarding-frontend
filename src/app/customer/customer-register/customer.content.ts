export interface IInput {
  label: string;
  placeholder: string;
  control: string;
  required: boolean;
  class: string;
  type: string;
  disabled?: boolean;
}

export const GENERAL_INPUTS: IInput[] = [
  {
    class: 'input col-12 col-md-3',
    label: 'ID',
    control: 'id',
    type: 'text',
    required: true,
    disabled: true,
    placeholder: '',
  },
  {
    class: 'input col-12 col-md-9',
    label: 'Nome',
    placeholder: 'Digite o nome',
    control: 'name',
    type: 'text',
    required: true,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'CPF',
    placeholder: 'Digite o CPF',
    control: 'cpf',
    type: 'text',
    required: true,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'CNPJ',
    placeholder: 'Digite o CNPJ',
    control: 'cnpj',
    type: 'text',
    required: false,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Data de Nascimento',
    placeholder: 'Digite a data de nascimento',
    control: 'birth',
    type: 'text',
    required: false,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Imagem',
    placeholder: 'Digite a url da imagem',
    control: 'img',
    type: 'text',
    required: false,
  },
];

export const CONTACT_INPUTS: IInput[] = [
  {
    class: 'input col-12 col-md-3',
    label: 'DDD',
    placeholder: 'Digite o DDD',
    control: 'ddd',
    type: 'number',
    required: true,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Celular',
    placeholder: 'Digite o celular',
    control: 'cel',
    type: 'text',
    required: true,
  },
  {
    class: 'input col-12 col-md-6',
    label: 'E-mail',
    placeholder: 'Digite o e-mail',
    control: 'email',
    type: 'email',
    required: true,
  },
];

export const ADDRESS_INPUTS: IInput[] = [
  {
    class: 'input col-12 col-md-3',
    label: 'CEP',
    placeholder: 'Digite o CEP',
    control: 'cep',
    type: 'text',
    required: true,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Estado',
    placeholder: 'Digite o nome do estado',
    control: 'state',
    type: 'text',
    required: true,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Cidade',
    placeholder: 'Digite o nome da cidade',
    control: 'city',
    type: 'text',
    required: true,
  },
  {
    class: 'input col-12 col-md-3',
    label: 'Bairro',
    placeholder: 'Digite o nome do bairro',
    control: 'neighborhood',
    type: 'text',
    required: true,
  },
  {
    class: 'input col-12 col-md-6',
    label: 'Nome da Rua',
    placeholder: 'Digite o nome da rua',
    control: 'addressName',
    type: 'text',
    required: true,
  },
  {
    class: 'input col-12 col-md-4',
    label: 'Complemento',
    placeholder: 'Digite o complemento',
    control: 'complement',
    type: 'text',
    required: false,
  },
  {
    class: 'input col-12 col-md-2',
    label: 'Número',
    placeholder: 'Digite o número ou S/N',
    control: 'number',
    type: 'text',
    required: false,
  },
];
