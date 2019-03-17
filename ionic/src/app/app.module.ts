import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FullTiemPage } from '../pages/full-tiem/full-tiem';
import { YouPage } from '../pages/you/you';
import { PreferencesPage } from '../pages/preferences/preferences';
import { JobsPage } from '../pages/jobs/jobs';
import { OrganizationPage } from '../pages/organization/organization';
import { CreateAnAccountPage } from '../pages/create-an-account/create-an-account';
import { ApplicantLoginPage } from '../pages/applicant-login/applicant-login';
import { EmployerLoginPage } from '../pages/employer-login/employer-login';
import { EmployerSignupPage } from '../pages/employer-signup/employer-signup';
import { EmployerProfilePage } from '../pages/employer-profile/employer-profile';
import { ChatWithMePage } from '../pages/chat-with-me/chat-with-me';
import { FindYourJobsPage } from '../pages/find-your-jobs/find-your-jobs';
import { MatchesPage } from '../pages/matches/matches';
import { TheHuntPage } from '../pages/the-hunt/the-hunt';
import { Tab1DefaultPagePage } from '../pages/tab1default-page/tab1default-page';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    FavoritesPage,
    FullTiemPage,
    YouPage,
    PreferencesPage,
    JobsPage,
    OrganizationPage,
    CreateAnAccountPage,
    ApplicantLoginPage,
    EmployerLoginPage,
    EmployerSignupPage,
    EmployerProfilePage,
    ChatWithMePage,
    FindYourJobsPage,
    MatchesPage,
    TheHuntPage,
    Tab1DefaultPagePage
  ],
  imports: [
    BrowserModule,
    IonicModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    FavoritesPage,
    FullTiemPage,
    YouPage,
    PreferencesPage,
    JobsPage,
    OrganizationPage,
    CreateAnAccountPage,
    ApplicantLoginPage,
    EmployerLoginPage,
    EmployerSignupPage,
    EmployerProfilePage,
    ChatWithMePage,
    FindYourJobsPage,
    MatchesPage,
    TheHuntPage,
    Tab1DefaultPagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}