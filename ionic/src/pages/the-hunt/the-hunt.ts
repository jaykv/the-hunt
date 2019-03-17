import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ApplicantLoginPage } from '../applicant-login/applicant-login';
import { CreateAnAccountPage } from '../create-an-account/create-an-account';
import { YouPage } from '../you/you';
import { FindYourJobsPage } from '../find-your-jobs/find-your-jobs';
import { EmployerLoginPage } from '../employer-login/employer-login';
import { EmployerProfilePage } from '../employer-profile/employer-profile';
import { MatchesPage } from '../matches/matches';
import { EmployerSignupPage } from '../employer-signup/employer-signup';

@Component({
  selector: 'page-the-hunt',
  templateUrl: 'the-hunt.html'
})
export class TheHuntPage {

  constructor(public navCtrl: NavController) {
  }
  goToWelcome(params){
    if (!params) params = {};
    this.navCtrl.push(WelcomePage);
  }goToApplicantLogin(params){
    if (!params) params = {};
    this.navCtrl.push(ApplicantLoginPage);
  }goToCreateAnAccount(params){
    if (!params) params = {};
    this.navCtrl.push(CreateAnAccountPage);
  }goToYou(params){
    if (!params) params = {};
    this.navCtrl.push(YouPage);
  }goToFindYourJobs(params){
    if (!params) params = {};
    this.navCtrl.push(FindYourJobsPage);
  }goToEmployerLogin(params){
    if (!params) params = {};
    this.navCtrl.push(EmployerLoginPage);
  }goToEmployerProfile(params){
    if (!params) params = {};
    this.navCtrl.push(EmployerProfilePage);
  }goToMatches(params){
    if (!params) params = {};
    this.navCtrl.push(MatchesPage);
  }goToEmployerSignup(params){
    if (!params) params = {};
    this.navCtrl.push(EmployerSignupPage);
  }
}
