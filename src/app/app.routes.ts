import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Students } from './pages/students/students';
import { About } from './pages/about/about';
import { AddStudent } from './pages/add-student/add-student';
import { StudentDetails } from './pages/student-details/student-details';
import { EditStudent } from './pages/edit-student/edit-student';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'students',
    component: Students
  },
  {
    path: 'students/:id',
    component: StudentDetails
  },
  {
    path: 'students/:id/edit',
    component: EditStudent
  },
  {
    path: 'add-student',
    component: AddStudent
  },
  {
    path: 'about',
    component: About
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
