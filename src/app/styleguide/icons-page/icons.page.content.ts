export interface IIcon {
  name: string;
  id: string;
  code: string;
  label?: string;
  isLoading?: boolean;
}

export const ICONS: IIcon[] = [
  {
    name: 'Loading',
    id: '',
    code: '<app-spinner [size]="1.3"></app-spinner>',
    label: '',
    isLoading: true,
  },
  {
    name: '',
    id: '',
    code: '<app-spinner label="Carregando..."></app-spinner>',
    label: 'Carregando...',
    isLoading: true,
  },
  {
    name: 'Typography',
    id: 'format_size',
    code: '<mat-icon>format_size</mat-icon>',
  },
  {
    name: 'Colors',
    id: 'format_paint',
    code: '<mat-icon>format_paint</mat-icon>',
  },
  {
    name: 'Inputs',
    id: 'keyboard',
    code: '<mat-icon>keyboard</mat-icon>',
  },
  {
    name: 'Buttons',
    id: 'toggle_on',
    code: '<mat-icon>toggle_on</mat-icon>',
  },
  {
    name: 'Tables',
    id: 'table_chart',
    code: '<mat-icon>table_chart</mat-icon>',
  },
  {
    name: 'Items',
    id: 'view_list',
    code: '<mat-icon>view_list</mat-icon>',
  },
  {
    name: 'Icons',
    id: 'mood',
    code: '<mat-icon>mood</mat-icon>',
  },
  {
    name: 'Pipes',
    id: 'paid',
    code: '<mat-icon>paid</mat-icon>',
  },
  {
    name: 'Home',
    id: 'home',
    code: '<mat-icon>home</mat-icon>',
  },
];
