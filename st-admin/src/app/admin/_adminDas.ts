import { INavData } from '@coreui/angular';
import { MatIcon } from '@angular/material/icon';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: './admin',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },

  // {
  //   name: 'Student',
  //   url: '/student',
  //   iconComponent: { name: 'cil-user' },
  //   children: [
  //     // {
  //     //   name: 'Student Add',
  //     //   url: '/student/studentAdd'
  //     // },
  //     {
  //       name: 'Student List ',
  //       url: '/student/studentList'
  //     },

  //     // {
  //     //   name: 'Tables',
  //     //   url: '/base/tables'
  //     // },

  //   ]
  // },

  {
    name: 'Admission',
    url: './admission',
    iconComponent: { name: 'cil-description' },
    children: [
      {
        name: ' Admission List',
        url: './admission/admissionList'
      },
      // {
      //   name: 'Exam Result List',
      //   url: './exam-result/examResultList'
      // },
      
    ]
  },
  {
    name: 'Teachers',
    url: './teacher',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Teachers Add',
        url: './teacher/teacherAdd'
      },
      {
        name: 'Teachers List ',
        url: './teacher/teacherList'
      },

      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },

    ]
  },
  // {
  //   name: 'Parents',
  //   url: '/parents',
  //   iconComponent: { name: 'cil-wc' },
  //   children: [
  //     {
  //       name: 'Parents Add',
  //       url: '/parents/parentsAdd'
  //     },
  //     {
  //       name: 'Parents List ',
  //       url: '/parents/parentsList'
  //     },

  //     // {
  //     //   name: 'Tables',
  //     //   url: '/base/tables'
  //     // },

  //   ]
  // },

  {
    name: 'Class',
    url: './class',
    iconComponent: { name: 'cil-color-border' },
    children: [
      {
        name: 'Class Add',
        url: './class/classAdd'
      },
      {
        name: 'Class List',
        url: './class/classList'
      },
      
    ]
  },
  {
    name: 'Class Room',
    url: './classRoom',
    iconComponent: { name: 'cil-room' },
    children: [
      {
        name: 'Class Room Add',
        url: './classRoom/classRoomAdd'
      },
      {
        name: 'Class Room List',
        url: './classRoom/classRoomList'
      },
      
    ]
  },

  {
    name: 'Department',
    url: './department',
    iconComponent: { name: 'cil-school' },
    children: [
      {
        name: 'Department Add',
        url: './department/departmentAdd'
      },
      {
        name: 'Department List',
        url: './department/departmentList'
      },
      
    ]
  },
  {
    name: 'Subject',
    url: './subject',
    iconComponent: { name: 'cil-book' },
    children: [
      {
        name: 'Subject Add',
        url: './subject/subjectAdd'
      },
      {
        name: 'Subject List',
        url: './subject/subjectList'
      },
      
    ]
  },
  {
    name: 'Routine',
    url: './routine',
    iconComponent: { name: 'cil-calendar' },
    children: [
      {
        name: 'Routine Add',
        url: './routine/routineAdd'
      },
      {
        name: 'Routine List',
        url: './routine/routineList'
      },
      
    ]
  },

  {
    name: 'Exam',
    url: './exam',
    iconComponent: { name: 'cil-notes' },
    children: [
      // {
      //   name: 'Exam routine Add',
      //   url: './exam-routine/examRoutineAdd'
      // },
      {
        name: 'Exam List',
        url: './exam/examList'
      },
      
    ]
  },

  {
    name: 'Exam Routine',
    url: './exam-routine',
    iconComponent: { name: 'cil-spreadsheet' },
    children: [
      {
        name: 'Exam Routine Add',
        url: './exam-routine/examRoutineAdd'
      },
      {
        name: 'Exam Routine List',
        url: './exam-routine/examRoutineList'
      },
      
    ]
  },
  {
    name: 'Exam Result',
    url: './exam-result',
    iconComponent: { name: 'cil-storage' },
    children: [
      {
        name: 'Exam Result Add',
        url: './exam-result/examResultAdd'
      },
      {
        name: 'Exam Result List',
        url: './exam-result/examResultList'
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
