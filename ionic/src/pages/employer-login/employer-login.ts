import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmployerProfilePage } from '../employer-profile/employer-profile';
import { MatchesPage } from '../matches/matches';
import { EmployerSignupPage } from '../employer-signup/employer-signup';

@Component({
  selector: 'page-employer-login',
  templateUrl: 'employer-login.html'
})
export class EmployerLoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToEmployerProfile(params){
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
