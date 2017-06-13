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
  registerUser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.registerUser = this.navParams.get('data');
      console.log("Register data for picture - ");
      console.log(this.registerUser[0].profile_picture);
      this.picture = this.registerUser[0].profile_picture;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding3Page');
  }
  next()
  { 
    this.navCtrl.push(Onboarding4Page, {data: this.registerUser});

  }

}
