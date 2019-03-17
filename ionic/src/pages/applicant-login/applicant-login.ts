import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateAnAccountPage } from '../create-an-account/create-an-account';
import { YouPage } from '../you/you';
import { FindYourJobsPage } from '../find-your-jobs/find-your-jobs';

@Component({
  selector: 'page-applicant-login',
  templateUrl: 'applicant-login.html'
})
export class ApplicantLoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToCreateAnAccount(params){
    if (!params) params = {};
    this.navCtrl.push(CreateAnAccountPage);
  }goToYou(params){
    if (!params) params = {};
    this.navCtrl.push(YouPage);
  }goToFindYourJobs(params){
    if (!params) params = {};
    this.navCtrl.push(FindYourJobsPage);
  }
}
