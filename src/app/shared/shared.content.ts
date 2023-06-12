import { IHeaderRoute, ISocialNetwork } from "./interfaces/shared.interface";

export const HEADER_ROUTES: IHeaderRoute[] = [
  {
    route: '/home',
    icon: 'home',
    label: 'Início',
  },
  {
    label: 'Projetos',
    icon: 'folder',
  }
];

export const PROJECT_ROUTES: IHeaderRoute[] = [
  {
    route: '/calculator',
    icon: 'calculate',
    label: 'Calculadora',
  },
  {
    route: '/customer',
    icon: 'group',
    label: 'CRUD Clientes',
  },
  {
    route: '/gh-search',
    icon: 'person_search',
    label: 'GitHub Search',
  },
  {
    route: '/styleguide',
    icon: 'format_paint',
    label: 'Styleguide',
  },
];

export const SOCIAL_CONTENT: ISocialNetwork[] = [
  {
    link: 'https://www.linkedin.com/in/mmanhaes/',
    color: 'primary',
    svg: '/assets/svgs/linkedin.svg',
    tooltip: 'LinkedIn',
  },
  {
    link: 'https://github.com/momanhaes',
    color: 'primary',
    svg: '/assets/svgs/github.svg',
    tooltip: 'GitHub',
  },
  {
    link: 'https://twitter.com/momanhaes',
    color: 'primary',
    svg: '/assets/svgs/twitter.svg',
    tooltip: 'Twitter',
  },
  {
    link: 'https://www.facebook.com/momanhaes',
    color: 'primary',
    svg: '/assets/svgs/facebook.svg',
    tooltip: 'Facebook',
  },
  {
    link: 'https://www.instagram.com/manhaesdev/',
    color: 'primary',
    svg: '/assets/svgs/instagram.svg',
    tooltip: 'Instagram',
  },
];
