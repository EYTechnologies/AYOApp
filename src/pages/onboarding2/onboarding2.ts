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
  	dob: any;
  	picture: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
   	this.picture = this.navParams.get('picture');
  	this.dob = this.navParams.get('dob');
    this.usergender = this.navParams.get('gender');

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
    this.initializingForms();
  }
  initializingForms(){
    // form validations
    this.ProfileForm = this.formBuilder.group({
        dob: [''],
        usergender: [''],
        userpreference: ['']
    });
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding2Page');
  }
  next()
  {
    this.navCtrl.push(Onboarding3Page, {picture: this.picture});
  }
}
