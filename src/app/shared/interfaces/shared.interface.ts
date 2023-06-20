export interface IToasty {
  text: string;
}

export enum ETema {
  DARK = 'Dark',
  LIGHT = 'Light',
}

export interface IHeaderRoute {
  route: string;
  icon: string;
  label: string;
  isExternal: boolean;
  children?: IHeaderRoute[];
}

export enum EOrigin {
  DELETE = 'delete',
  EDIT = 'edit',
  CREATE = 'create',
  PROFILE = 'profile',
}

export interface IDialogData {
  title: string;
  message: string;
  origin: string;
}

export interface ICEP {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface ISocialNetwork {
  link: string;
  color: string;
  svg: string;
  tooltip: string;
}
