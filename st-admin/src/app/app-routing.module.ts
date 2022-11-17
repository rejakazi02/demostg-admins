import { TeacherPanelComponent } from './teacher-panel/teacher-panel.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
// import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminComponent } from './admin/admin.component';

const childrenRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  {
    path: 'base',
    loadChildren: () =>
      import('./views/base/base.module').then((m) => m.BaseModule),
  },
  {
    path: 'buttons',
    loadChildren: () =>
      import('./views/buttons/buttons.module').then((m) => m.ButtonsModule),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./views/charts/charts.module').then((m) => m.ChartsModule),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('./views/icons/icons.module').then((m) => m.IconsModule),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./views/notifications/notifications.module').then(
        (m) => m.NotificationsModule
      ),
  },
  {
    path: 'widgets',
    loadChildren: () =>
      import('./views/widgets/widgets.module').then((m) => m.WidgetsModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./views/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./containers/default-layout/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
];
const adminChildrenRoutes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  {
    path: 'class',
    loadChildren: () =>
      import('./views/class/class.module').then((m) => m.ClassModule),
  },
  // {
  //   path: 'parents',
  //   loadChildren: () =>
  //     import('./views/parent/parent.module').then((m) => m.ParentModule),
  // },
  {
    path: 'subject',
    loadChildren: () =>
      import('./views/subject/subject.module').then((m) => m.SubjectModule),
  },
  {
    path: 'department',
    loadChildren: () =>
      import('./views/department/department.module').then(
        (m) => m.DepartmentModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./views/teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/section/section.module').then((m) => m.SectionModule),
  },
  {
    path: 'classRoom',
    loadChildren: () =>
      import('./views/class-room/class-room.module').then(
        (m) => m.ClassRoomModule
      ),
  },
  {
    path: 'single-student-details',
    loadChildren: () =>
      import('./views/single-student-details/single-student-details.module').then(
        (m) => m.SingleStudentDetailsModule
      ),
  },
  {
    path: 'routine',
    loadChildren: () =>
      import('./views/routine/routine.module').then(
        (m) => m.RoutineModule
      ),
  },

  {
    path: 'admin-profile',
    loadChildren: () =>
      import('./containers/default-layout/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
];



const studentPanelChildrenRoutes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full',
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  // {
  //   path: 'parents',
  //   loadChildren: () =>
  //     import('./views/parent/parent.module').then((m) => m.ParentModule),
  // },
  {
    path: 'info',
    loadChildren: () =>
      import('./views/student-info/student-info.module').then((m) => m.StudentInfoModule),
  },

  {
    path: 'student-profile',
    loadChildren: () =>
      import('./containers/default-layout/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
];
const teacherPanelChildrenRoutes: Routes = [
  {
    path: '',
    redirectTo: 'teacher-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'teacher-dashboard',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  // {
  //   path: 'parents',
  //   loadChildren: () =>
  //     import('./views/parent/parent.module').then((m) => m.ParentModule),
  // },
  {
    path: 'teacher-info',
    loadChildren: () =>
      import('./views/teacher-info/teacher-info.module').then((m) => m.TeacherInfoModule),
  },

  {
    path: 'teacher-profile',
    loadChildren: () =>
      import('./containers/default-layout/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    component: AdminComponent,
    children: adminChildrenRoutes,
    canActivate: [AuthGuard],
    data: {
      title: 'Home',
    },
  },
  {
    path: '',
    component: StudentPanelComponent,
    children: studentPanelChildrenRoutes,
    canActivate: [AuthGuard],
    data: {
      title: 'Home',
    },
  },
  {
    path: '',
    component: TeacherPanelComponent,
    children: teacherPanelChildrenRoutes,
    canActivate: [AuthGuard],
    data: {
      title: 'Home',
    },
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500',
    },
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
