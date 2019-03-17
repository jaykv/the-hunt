import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FindYourJobsPage } from '../find-your-jobs/find-your-jobs';

@Component({
  selector: 'page-you',
  templateUrl: 'you.html'
})
export class YouPage {

  constructor(public navCtrl: NavController) {
  }
  goToFindYourJobs(params){
    if (!params) params = {};
    this.navCtrl.push(FindYourJobsPage);
  }
}
