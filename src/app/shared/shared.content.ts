import { IHeaderRoute } from "./interfaces/shared.interface";

export const HEADER_ROUTES: IHeaderRoute[] = [
  {
    route: '/home',
    icon: 'home',
    label: 'Início',
  },
  {
    route: '/customer',
    icon: 'group',
    label: 'Clientes',
  },
  {
    route: '/styleguide',
    icon: 'format_paint',
    label: 'Styleguide',
  },
];
