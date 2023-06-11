import { IHeaderRoute, ISocialNetwork } from "./interfaces/shared.interface";

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
    route: '/gh-search',
    icon: 'person_search',
    label: 'GH Search',
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
