export interface IContent {
  route: string;
  icon: string;
  label: string;
}

export const STYLEGUIDE_CONTENT: IContent[] = [
  {
    route: '/styleguide/typography',
    icon: 'format_size',
    label: 'Typography',
  },
  {
    route: '/styleguide/colors',
    icon: 'format_paint',
    label: 'Colors',
  },
  {
    route: '/styleguide/inputs',
    icon: 'keyboard',
    label: 'Inputs',
  },
  {
    route: '/styleguide/buttons',
    icon: 'toggle_on',
    label: 'Buttons',
  },
  {
    route: '/styleguide/tables',
    icon: 'table_chart',
    label: 'Tables',
  },
  {
    route: '/styleguide/items',
    icon: 'view_list',
    label: 'Items',
  },
  {
    route: '/styleguide/icons',
    icon: 'mood',
    label: 'Icons',
  },
  {
    route: '/styleguide/pipes',
    icon: 'paid',
    label: 'Pipes',
  },
];
