import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatchesPage } from '../matches/matches';

@Component({
  selector: 'page-employer-profile',
  templateUrl: 'employer-profile.html'
})
export class EmployerProfilePage {

  constructor(public navCtrl: NavController) {
  }
  goToMatches(params){
    if (!params) params = {};
    this.navCtrl.push(MatchesPage);
  }
}
