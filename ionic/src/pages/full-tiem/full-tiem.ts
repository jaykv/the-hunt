import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobsPage } from '../jobs/jobs';
import { ChatWithMePage } from '../chat-with-me/chat-with-me';
import { OrganizationPage } from '../organization/organization';
import { MatchesPage } from '../matches/matches';

@Component({
  selector: 'page-full-tiem',
  templateUrl: 'full-tiem.html'
})
export class FullTiemPage {

  tab1Root: any = OrganizationPage;
  tab2Root: any = MatchesPage;
  constructor(public navCtrl: NavController) {
  }
  goToJobs(params){
    if (!params) params = {};
    this.navCtrl.push(JobsPage);
  }goToChatWithMe(params){
    if (!params) params = {};
    this.navCtrl.push(ChatWithMePage);
  }goToOrganization(params){
    if (!params) params = {};
    this.navCtrl.push(OrganizationPage);
  }
}
