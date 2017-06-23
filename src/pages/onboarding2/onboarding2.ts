import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Onboarding3Page } from "../onboarding3/onboarding3";
import {FormBuilder, Validators} from "@angular/forms";

/**
 * Generated class for the Onboarding2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-onboarding2',
  templateUrl: 'onboarding2.html',
})
export class Onboarding2Page {

	ProfileForm: any;
	gender: any;
  usergender: any;
  preference: any;
  userpreference: any;
  dob: any;
  picture: any;
  lat: any;
  long: any;
  registerUser: any;



   constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
   	this.registerUser = this.navParams.get('data');
    

  	this.dob = this.registerUser[1].dob;
    console.log(this.dob);
    this.usergender = this.registerUser[2].gender;
    console.log(this.usergender);
    this.userpreference = 'Straight';

    
  	this.gender = [
        {
          options: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' }
          ]
        }
    ];
    this.preference = [
        {
          options: [
            { text: 'Straight', value: 'Straight' },
            { text: 'Gay', value: 'Gay' },
            { text: 'Bi', value: 'Bi' }
          ]
        }
    ];

  }

    
  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding2Page');
  }

  setUserPreference() {
    
  }
  next()
  { this.registerUser.splice(2, 1);
    this.registerUser.push({gender: this.usergender});
    console.log(this.registerUser);
    this.registerUser.splice(1, 1);
    this.registerUser.push({preference: this.userpreference});
    this.registerUser.push({dob: this.dob});
    this.navCtrl.push(Onboarding3Page, {data: this.registerUser});
    console.log("onboarding 2 data pushed to 3 -");
    console.log(this.registerUser);
  }
}
