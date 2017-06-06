import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FacebookAuth, User } from '@ionic/cloud-angular';
import { HomePage } from "../home/home";
import { Onboarding1Page } from "../onboarding1/onboarding1";
import { UserdataProvider } from "../../providers/userdata/userdata";
import { HTTP, HTTPResponse } from '@ionic-native/http';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loadingPopup: any;
  userfacebookdata: any;
  
  constructor(public loadingCtrl: LoadingController, public userData: UserdataProvider,
    public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, 
    public facebookAuth: FacebookAuth, public user: User, private http: HTTP) 

  {
  	this.loadingPopup = this.loadingCtrl.create({
        spinner: 'dots',
        content: 'Signing you in'
        });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  facebooklogin()
  {
    this.fb.getLoginStatus().then(
      msg => {
        if(msg.status == 'connected') {
          // console.log(msg.authResponse.email);
          // this.userConnectedToFacebook(msg);
          this.usernotconnectedtofacebook(msg);

        }
        else if(msg.status == 'not_authorized')
        {
          this.usernotconnectedtofacebook(msg);
        }
        else if(msg.status == 'unknown')
        {
          this.usernotconnectedtofacebook(msg);
        }
        console.log(msg.status);
      },
      err => {console.log(err)});
    // Facebook.login(['email','public_profile']).then(msg => {console.log(msg.authResponse.userID)}, err => {console.log(err)});
    // Facebook.api('me?fields=email,first_name,last_name,birthday,gender', null).then(msg => {console.log(msg)}, err => {console.log(err)});

  }
//if user had previously logged in via facebook, this will not re-ask him to login again. 
userConnectedToFacebook(msg) {
      this.fb.login(['email','public_profile','user_friends']).then(msg => {

      console.log(msg.authResponse);

      this.fb.api('me?fields=email', null).then(userinfo => {
              this.loadingPopup.present();

              this.userData.login(userinfo.email);
              this.loadingPopup.dismiss();
              this.navCtrl.setRoot(Onboarding1Page);
    }, err => {console.log(err)});


    }, err => {console.log(err)});

    
  }

usernotconnectedtofacebook(msg)
  {
    this.fb.login(['email','public_profile','user_friends']).then(msg => {

      this.loadingPopup.present();
      console.log(msg.authResponse.userID);

      this.fb.api('me?fields=email,first_name,last_name,about,birthday,gender,picture.width(200).height(200),location,id,relationship_status', null).then(userinfo => {

                console.log("=>" + userinfo);
                
                // API data - to send the data to the databse.
                var link = 'http://ayo-app.herokuapp.com/api/users/register';
                let headers = new Headers({ 'Content-Type': 'application/json' });
                var data_string = JSON.stringify({ first_name: userinfo.first_name, last_name: userinfo.last_name, gender: userinfo.gender, email: userinfo.email, username: userinfo.id, birthday: userinfo.birthday, realtionship_status: userinfo.relationship_status, location: userinfo.location, image: userinfo.picture.data.url, display_name: userinfo.first_name, location_lat: 28.6334424, location_lang: 77.3841108});
                console.log(data_string);
                this.http.post(link, data_string, headers)
                        .then( data => 
                             {
                                this.userfacebookdata = data.data;
                                console.log("User Facebook Data - "+this.userfacebookdata);
                                //local storage
                                this.userData.login(this.userfacebookdata.username, this.userfacebookdata.token);
                                this.loadingPopup.dismiss();
                               
                                // navigating to the onboarding page
                                this.navCtrl.setRoot(Onboarding1Page, {picture: userinfo.picture.data.url, dob: userinfo.birthday, gender: userinfo.gender, relationship_status: userinfo.relationship_status});
                                // console.log(this.userfacebookdata[0].email);
                            })
                        .catch( error=> 
                          {
                            console.log(error)
                          });

   
        }, err => {console.log(err)});


    }, err => {console.log(err)});

    
     
  }  

}
