import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YouPage } from '../you/you';
import { FindYourJobsPage } from '../find-your-jobs/find-your-jobs';

@Component({
  selector: 'page-create-an-account',
  templateUrl: 'create-an-account.html'
})
export class CreateAnAccountPage {

  constructor(public navCtrl: NavController) {
  }
  goToYou(params){
    if (!params) params = {};
    this.navCtrl.push(YouPage);
  }goToFindYourJobs(params){
    if (!params) params = {};
    this.navCtrl.push(FindYourJobsPage);
  }
}
