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

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http, public loadingCtrl: LoadingController, public storage: Storage) {

    this.registerUser = this.navParams.get('data');
    console.log(this.registerUser);
   


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
                
                var link = 'https://ayo-app.herokuapp.com/api/users/profile';
                let headers = new Headers({ 'Content-Type': 'application/json' });
                var data_string = JSON.stringify({id: this.userid, token: this.token, display_name: this.username, preference: this.registerUser.preference});
            
                var options = new RequestOptions({headers: headers});
                this.http.put(link, data_string, options)
                  .map(res => res.json())
                    .subscribe((data) => {
                      console.log(data);
                      this.profileresponses = data;
                      this.navCtrl.setRoot(TabsPage);


                    }, (err) => { 
                      console.log(err); 
                    });
    
  }

}
