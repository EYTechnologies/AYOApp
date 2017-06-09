import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { TabsPage } from '../tabs/tabs';
import {Http, Headers, RequestOptions} from '@angular/http';

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
   registerUser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: Http) {
  	// this.initializingForms();
    this.registerUser = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding4Page');
  }
  // initializingForms(){
  //   // Change password form validations
  //   this.usernameForm = this.formBuilder.group({
  //      username: ['']
  //   });
  }

  next()
  {
                var link = 'https://ayo-app.herokuapp.com/api/users/profile';
                let headers = new Headers({ 'Content-Type': 'application/json' });
                var data_string = JSON.stringify({username: userinfo.id, first_name: userinfo.first_name, last_name: userinfo.last_name, email: userinfo.email, location: this.location, profile_picture: userinfo.picture.data.url, dob: userinfo.birthday, gender: userinfo.gender, relationship_status: userinfo.relationship_status, preference: null});

                console.log('!@!@!@!@!@');
                console.log(data_string);
                
                var options = new RequestOptions({headers: headers});
                this.http.put(link, data_string, options)
                  .map(res => res.json())
                    .subscribe((data) => {
                      console.log(data);
                      this.userfacebookdata = data.data;
                      console.log("User Facebook Data - "+this.userfacebookdata);

                      //local storage
                      // this.userData.login(this.userfacebookdata.username, this.userfacebookdata.token);
                      this.loadingPopup.dismiss();
                      // this.navCtrl.push(TabsPage);
                      // navigating to the onboarding page
                      // this.navCtrl.setRoot(Onboarding1Page, {picture: userinfo.picture.data.url, dob: userinfo.birthday, gender: userinfo.gender, relationship_status: userinfo.relationship_status});
                      // console.log(this.userfacebookdata[0].email);


                    }, (err) => { 
                      console.log(err); 
                    });
    
  }

}
