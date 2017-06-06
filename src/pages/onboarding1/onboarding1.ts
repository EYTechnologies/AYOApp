import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Onboarding2Page } from "../onboarding2/onboarding2";

/**
 * Generated class for the Onboarding1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-onboarding1',
  templateUrl: 'onboarding1.html',
})
export class Onboarding1Page {
	picture: any;
  dob: any;
  gender: any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	 this.picture = this.navParams.get('picture');
  	 this.dob = this.navParams.get('dob');
     this.gender = this.navParams.get('gender');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding1Page');
  }
  addlocation()
  {

  }

  next()
  {
    this.navCtrl.push(Onboarding2Page, {picture: this.picture, dob: this.dob, gender: this.gender});
  }
}
