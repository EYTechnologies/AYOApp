import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FacebookAuth, User } from '@ionic/cloud-angular';
import { HomePage } from "../home/home";

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
  
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, public facebookAuth: FacebookAuth, public user: User) {
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
          // this.userData.login(msg.authResponse.email);
          // console.log(msg.authResponse.email);
          this.userConnectedToFacebook(msg);

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

              // this.userData.login(userinfo.email);
              this.loadingPopup.dismiss();
            this.navCtrl.push(HomePage);
    }, err => {console.log(err)});


    }, err => {console.log(err)});

    
  }

usernotconnectedtofacebook(msg)
  {
    this.fb.login(['email','public_profile','user_friends']).then(msg => {

      this.loadingPopup.present();
      console.log(msg.authResponse.userID);

      this.fb.api('me?fields=email,first_name,last_name,about,birthday,gender,picture.width(200).height(200),location,id', null).then(userinfo => {

                console.log("=>" + userinfo.picture.data.url);
                
                // API data - to send the data to the databse.

        		this.navCtrl.push(HomePage);
        }, err => {console.log(err)});


    }, err => {console.log(err)});

    
     
  }  

}
