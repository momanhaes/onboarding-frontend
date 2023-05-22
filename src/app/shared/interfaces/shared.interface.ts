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
}

export enum EOrigin {
  DELETE = 'delete',
  EDIT = 'edit',
  CREATE = 'create',
}

export interface IDialogData {
  title: string;
  message: string;
  origin: string;
}
