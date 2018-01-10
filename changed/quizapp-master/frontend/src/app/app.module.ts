import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routing }  from './app.routing';
import { AppComponent } from './app.component';


import { NavbarComponent } from './navbar/navbar.component';

import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { AuthorService } from './services/author.service';
import { LoginComponent } from './login/login.component';
import { AuthorComponent } from './authorlogin/authorlogin';
import { FlashMessagesModule } from 'angular2-flash-messages/module';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';

import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    AuthorComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthorService, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
