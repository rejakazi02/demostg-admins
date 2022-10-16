import { INavData } from '@coreui/angular';
import { MatIcon } from '@angular/material/icon';

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
    name: 'Student',
    url: '/student',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Student Add',
        url: '/student/studentAdd'
      },
      {
        name: 'Student List ',
        url: '/student/studentList'
      },

      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },

    ]
  },
  {
    name: 'Teachers',
    url: '/teacher',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Teachers Add',
        url: '/student/studentAdd'
      },
      {
        name: 'Teachers List ',
        url: '/student/studentList'
      },

      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },

    ]
  },
  {
    name: 'Parents',
    url: '/parents',
    iconComponent: { name: 'cil-wc' },
    children: [
      {
        name: 'Parents Add',
        url: '/student/studentAdd'
      },
      {
        name: 'Parents List ',
        url: '/student/studentList'
      },

      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },

    ]
  },
  {
    name: 'Class',
    url: '/class',
    iconComponent: { name: 'cil-school' },
    children: [
      {
        name: 'Class Add',
        url: '/buttons/buttons'
      },
      {
        name: 'Class List',
        url: '/buttons/button-groups'
      },
      
    ]
  },
  {
    name: 'Subject',
    url: '/subject',
    iconComponent: { name: 'cil-book' },
    children: [
      {
        name: 'Subject Add',
        url: '/buttons/buttons'
      },
      {
        name: 'Subject List',
        url: '/buttons/button-groups'
      },
      
    ]
  },
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/forms/form-control'
  //     },
  //     {
  //       name: 'Select',
  //       url: '/forms/select'
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/forms/checks-radios'
  //     },
  //     {
  //       name: 'Range',
  //       url: '/forms/range'
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/forms/input-group'
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/forms/floating-labels'
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/forms/layout'
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
];
