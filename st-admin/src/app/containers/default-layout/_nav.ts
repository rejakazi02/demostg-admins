import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },

  {
    name: 'Institute',
    url: '/base',
    iconComponent: { name: 'cil-library-building' },
    children: [
      {
        name: 'Institute Lists',
        url: '/base/instList'
      },
      {
        name: 'Add Institute',
        url: '/base/instituteAdd'
      },

      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },

    ]
  },
  
];
