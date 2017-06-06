import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Onboarding2Page } from "../onboarding2/onboarding2";

import { Geolocation } from '@ionic-native/geolocation';

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
  lat: number;
  lang: number;
  registerUser: any = {};
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

  	 this.picture = this.navParams.get('picture');
     this.registerUser.push({profile_picture: this.picture});

  	 this.dob = this.navParams.get('dob');
     this.registerUser.push({picture: this.dob});
     
     this.gender = this.navParams.get('gender');
     this.registerUser.push({picture: this.gender});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding1Page');
  }
  fetchUserLocation()
  {
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        //Fetch the latitude and longitude

        this.lat = resp.coords.latitude;
        this.lang = resp.coords.longitude;
        this.registerUser.push({location_lat: this.lat});
        this.registerUser.push({location_long: this.lang});

        console.log(this.lat);
        console.log(this.lang);
        console.log(this.registerUser);
      }).catch( 
      (err) => {
        console.log('Error: ', err);
      });

  }

  next()
  {
    this.navCtrl.push(Onboarding2Page, {picture: this.picture, dob: this.dob, gender: this.gender, location_lat: this.lat, location_long: this.lang});
  }
}
