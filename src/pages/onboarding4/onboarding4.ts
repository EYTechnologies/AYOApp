import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the Onboarding4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-onboarding4',
  templateUrl: 'onboarding4.html',
})
export class Onboarding4Page {
   usernameForm: any;	
   username: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  	this.initializingForms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding4Page');
  }
  initializingForms(){
    // Change password form validations
    this.usernameForm = this.formBuilder.group({
       username: ['']
    });
  }

  next()
  {
    this.navCtrl.push(TabsPage);
  }
}
