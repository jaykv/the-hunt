import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmployerProfilePage } from '../employer-profile/employer-profile';
import { MatchesPage } from '../matches/matches';

@Component({
  selector: 'page-employer-signup',
  templateUrl: 'employer-signup.html'
})
export class EmployerSignupPage {

  constructor(public navCtrl: NavController) {
  }
  goToEmployerProfile(params){
    if (!params) params = {};
    this.navCtrl.push(EmployerProfilePage);
  }goToMatches(params){
    if (!params) params = {};
    this.navCtrl.push(MatchesPage);
  }
}
