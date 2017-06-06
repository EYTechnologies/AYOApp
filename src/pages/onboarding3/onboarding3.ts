import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Onboarding4Page } from "../onboarding4/onboarding4";

/**
 * Generated class for the Onboarding3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-onboarding3',
  templateUrl: 'onboarding3.html',
})
export class Onboarding3Page {
  picture: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.picture = this.navParams.get('picture');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding3Page');
  }
  next()
  {
    this.navCtrl.push(Onboarding4Page);
  }

}
