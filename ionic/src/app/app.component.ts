import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { YouPage } from '../pages/you/you';
import { FindYourJobsPage } from '../pages/find-your-jobs/find-your-jobs';
import { PreferencesPage } from '../pages/preferences/preferences';
import { ApplicantLoginPage } from '../pages/applicant-login/applicant-login';
import { CreateAnAccountPage } from '../pages/create-an-account/create-an-account';
import { EmployerLoginPage } from '../pages/employer-login/employer-login';
import { EmployerProfilePage } from '../pages/employer-profile/employer-profile';
import { MatchesPage } from '../pages/matches/matches';
import { EmployerSignupPage } from '../pages/employer-signup/employer-signup';
import { JobsPage } from '../pages/jobs/jobs';
import { OrganizationPage } from '../pages/organization/organization';
import { TheHuntPage } from '../pages/the-hunt/the-hunt';


import { WelcomePage } from '../pages/welcome/welcome';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToYou(params){
    if (!params) params = {};
    this.navCtrl.setRoot(YouPage);
  }goToFindYourJobs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FindYourJobsPage);
  }goToPreferences(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PreferencesPage);
  }goToWelcome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(WelcomePage);
  }goToApplicantLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ApplicantLoginPage);
  }goToCreateAnAccount(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CreateAnAccountPage);
  }goToEmployerLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EmployerLoginPage);
  }goToEmployerProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EmployerProfilePage);
  }goToMatches(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MatchesPage);
  }goToEmployerSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EmployerSignupPage);
  }goToJobs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(JobsPage);
  }goToOrganization(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OrganizationPage);
  }goToTheHunt(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TheHuntPage);
  }
}
