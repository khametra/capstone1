import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { NgModule } from '@angular/core';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthorComponent } from './authorlogin/authorlogin';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {  path: 'quiz', component: QuizComponent },
  {  path: '', component: HomeComponent }, // Default Route,
  {  path: 'register', component: RegisterComponent // Register Route
   // canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'login',
    component: LoginComponent // Login Route
   // canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'authorlogin',
    component: AuthorComponent // Login Route
   // canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
{path: 'navbar', component: NavbarComponent},
  { path: '**', component: HomeComponent }

];

export const routing = RouterModule.forRoot(appRoutes);
