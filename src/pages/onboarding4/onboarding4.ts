import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Storage } from '@ionic/storage';

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
   loadingPopup: any;
   profileresponses: any;
   token: any;
   userid: any;
   userModel: {profile_picture?: string, location_lat?: any, location_long?: any, gender?: any, preference?: any, dob?: any, userName?: any} = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http, public loadingCtrl: LoadingController, public storage: Storage) {

    console.log(this.navParams.get('data'));
    this.registerUser = this.navParams.get('data');
    console.log(this.registerUser[0].profile_picture);

    this.userModel.profile_picture = this.registerUser[0].profile_picture;
    this.userModel.location_lat = this.registerUser[1].location_lat;
    this.userModel.location_long = this.registerUser[2].location_long;
    this.userModel.gender = this.registerUser[3].gender;
    this.userModel.preference = this.registerUser[4].preference;
    this.userModel.dob = this.registerUser[5].dob;
   


    this.storage.get('token').then((value) => {
             this.token = value;
             console.log("session token - "+this.token);
    });

    this.storage.get('username').then((value) => {
             this.userid = value;
             console.log("id - "+this.userid);
    });
  }

  ionViewDidLoad() {
  }


  saveonboardingdata()
  {  
    this.userModel.userName = this.username;      
    this.navCtrl.setRoot(TabsPage, {user: this.userModel});          
    var link = 'https://ayo-app.herokuapp.com/api/users/profile';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    var data_string = JSON.stringify({id: this.userid, token: this.token, display_name: this.username, dob: this.userModel.dob, gender: this.userModel.gender, preference: this.userModel.preference});

    var options = new RequestOptions({headers: headers});
    this.http.put(link, data_string, options)
      .map(res => res.json())
        .subscribe((data) => {
          console.log(data);
          this.profileresponses = data;
          
          this.navCtrl.setRoot(TabsPage, {user: this.userModel});


        }, (err) => { 
          console.log(err); 
        });
   
    
    
  }

}
