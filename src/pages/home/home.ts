import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserdataProvider } from "../../providers/userdata/userdata";
import { Onboarding1Page } from "../onboarding1/onboarding1";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public userData: UserdataProvider, public navCtrl: NavController) {

  }
  logout()
  {
  	this.userData.logout();
  	this.navCtrl.setRoot(Onboarding1Page);
  }

}
