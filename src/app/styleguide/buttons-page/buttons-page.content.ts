export interface IButton {
  theme: string;
  label: string;
  disabled: boolean;
  code: string;
  icon?: string;
}

export const BUTTONS: IButton[] = [
  {
    theme: 'primary',
    label: 'Primary Icon',
    disabled: false,
    code: '<app-button theme="primary" label="Primary Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'primary',
    label: 'Primary',
    disabled: false,
    code: '<app-button theme="primary" label="Primary"></app-button>',
  },
  {
    theme: 'basic',
    label: 'Basic Icon',
    disabled: false,
    code: '<app-button theme="basic" label="Basic Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'basic',
    label: 'Basic',
    disabled: false,
    code: '<app-button theme="basic" label="Basic"></app-button>',
  },
  {
    theme: 'accent',
    label: 'Accent Icon',
    disabled: false,
    code: '<app-button theme="accent" label="Accent Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'accent',
    label: 'Accent',
    disabled: false,
    code: '<app-button theme="accent" label="Accent"></app-button>',
  },
  {
    theme: 'warn',
    label: 'Warn Icon',
    disabled: false,
    code: '<app-button theme="warn" label="Warn Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'warn',
    label: 'Warn',
    disabled: false,
    code: '<app-button theme="warn" label="Warn"></app-button>',
  },
  {
    theme: 'outline',
    label: 'Outline Icon',
    disabled: false,
    code: '<app-button theme="outline" label="Outline Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'outline',
    label: 'Outline',
    disabled: false,
    code: '<app-button theme="outline" label="Outline"></app-button>',
  },
  {
    theme: 'primary-disabled',
    label: 'Primary Disabled',
    disabled: true,
    code: '<app-button theme="primary-disabled" label="Primary Disabled" [disabled]="true"></app-button>',
  },
  {
    theme: 'outline',
    label: 'Outline Disabled',
    disabled: true,
    code: '<app-button theme="outline" label="Outline Disabled" [disabled]="true"></app-button>',
  },
];
