// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import your DashboardComponent
import { TaskListComponent } from './task-list/task-list.component'; // Import your TaskListComponent
import { TaskDetailComponent } from './task-detail/task-detail.component'; // Import your TaskDetailComponent
import { TaskCreateComponent } from './task-create/task-create.component'; // Import your TaskCreateComponent
import { TaskEditComponent } from './task-edit/task-edit.component'; // Import your TaskEditComponent
import { LoginComponent } from './user-log/user-log.component'; // Import your LoginComponent
import { AuthGuard } from './auth.gurd'; // Import your AuthGuard

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] // Apply the AuthGuard to the Dashboard route
  },
  {
    path: 'tasks',
    canActivate: [AuthGuard], // Apply the AuthGuard to all child routes of 'tasks'
    children: [
      { path: '', component: TaskListComponent }, // Display Task List by default
      { path: 'create', component: TaskCreateComponent }, // Route for creating a task
      { path: ':id', component: TaskDetailComponent }, // Route to view task details
      { path: 'edit/:id', component: TaskEditComponent } // Route to edit task by ID
    ]
  },
  {
    path: 'login',
    component: LoginComponent // Route to the Login page
  },
  // Other routes if needed
  
  // Handle invalid routes - Page not found or redirection
  {
    path: '**',
    redirectTo: ''
    // You can redirect to a custom 'not-found' component or a default route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
