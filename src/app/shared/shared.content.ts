import { IHeaderRoute, ISocialNetwork } from "./interfaces/shared.interface";

const PROJECTS_ROUTES: IHeaderRoute[] = [
  {
    route: '/calculator',
    icon: 'calculate',
    label: 'Calculadora',
    isExternal: false,
  },
  {
    route: '/customer',
    icon: 'group',
    label: 'CRUD Clientes',
    isExternal: false,
  },
  {
    route: '/gh-search',
    icon: 'person_search',
    label: 'GitHub Search',
    isExternal: false,
  },
  {
    route: 'https://gerenciador-figurinhas.netlify.app',
    icon: 'contact_page',
    label: 'Gerenciador de Figurinhas',
    isExternal: true,
  },
  {
    route: '/styleguide',
    icon: 'format_paint',
    label: 'Styleguide',
    isExternal: false,
  },
];

export const HEADER_ROUTES: IHeaderRoute[] = [
  {
    route: '/home',
    icon: 'home',
    label: 'Início',
    isExternal: false,
  },
  {
    route: '',
    label: 'Projetos',
    icon: 'folder',
    children: PROJECTS_ROUTES,
    isExternal: false,
  },
  {
    route: '/experience',
    icon: 'work',
    label: 'Experiência',
    isExternal: false,
  },
  {
    route: '/education',
    icon: 'school',
    label: 'Educação',
    isExternal: false,
  },
  {
    route: '/awards',
    icon: 'emoji_events',
    label: 'Premiações',
    isExternal: false,
  },
  {
    route: '/blog',
    icon: 'article',
    label: 'Blog',
    isExternal: false,
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
