import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Inicio de Sesion',
    loadComponent: () => import('./auth/login/login.component'),
  },
  {
    path: 'register',
    title: 'Registro del usuario',
    loadComponent: () => import('./auth/register/register.component'),
  },

  {
    path: 'task',
    loadComponent: () => import('./homeworks/homeworks.component'),
    children: [
      {
        path: 'nuevaTarea',
        title: 'Nueva-Tarea',
        loadComponent: () => import('./homeworks/pages/new-task/new-task.component'),
      },
      {
        path: 'resumen',
        title: 'Resumen-Tareas',
        loadComponent: () => import('./homeworks/pages/all-tasks/all-tasks.component'),
      },
      {
        path: 'pendientes',
        title: 'Tareas-Pendientes',
        loadComponent: () => import('./homeworks/pages/pending-tasks/pending-tasks.component'),
      },
      {
        path: 'completas',
        title: 'Tareas-Completas',
        loadComponent: () => import('./homeworks/pages/complete-tasks/complete-tasks.component'),
      },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];
