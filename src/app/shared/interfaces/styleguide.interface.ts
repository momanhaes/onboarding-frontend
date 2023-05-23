export interface IStyleguideRoute {
  route: string;
  icon: string;
  label: string;
}

export interface IStyleguideButton {
  theme: string;
  label: string;
  disabled: boolean;
  code: string;
  icon?: string;
}

export interface IStyleguideColor {
  name: string;
  hex: string;
}

export interface IStyleguideIcon {
  name: string;
  id: string;
  code: string;
  label?: string;
  isLoading?: boolean;
}

export interface IStyleguideInput {
  name: string;
  code: string;
  label: string;
  type: string;
  control: string;
  required: boolean;
  disabled: boolean;
  placeholder: string;
  mask: string;
  isSearch?: boolean;
}

export interface IStyleguideItem {
  label: string;
  value: string | number;
  type: string;
  code: string;
}

export interface IStyleguidePipe {
  name: string;
  type: string;
  usage: string;
  value: string | number;
}

export interface IStyleguideTypography {
  name: string;
  code: string;
  id: string;
}
