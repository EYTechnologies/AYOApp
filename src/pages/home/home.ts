import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, App } from 'ionic-angular';
import { UserdataProvider } from "../../providers/userdata/userdata";
import { Onboarding1Page } from "../onboarding1/onboarding1";
import {Http, Headers, RequestOptions} from '@angular/http';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   registerUser: any;
   loadingPopup: any;
   userid: any;
   token: any;
   profiledata: any;
   picture: any;
   gender: any;
   usergender: any;
   preference: any;
   userpreference: any;
   dob: any;
   status: any;
   userstatus: any;
   height: any;
   userheight: any;
   tokendata: any;
   display_name: any;
   email: any;
   hometown: any;

  constructor(public userData: UserdataProvider, public appCtrl: App, public navParams: NavParams, public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public storage: Storage) {
     this.loadingPopup = this.loadingCtrl.create({
        spinner: 'dots',
        content: 'Loading Profile'
        });  

  	// this.storage.get('token').then((value) => {
   //           this.token = value;
   //           console.log("session token - "+this.token);
   //  });

    // this.storage.get('username').then((value) => {
    //          this.userid = value;
    //          this.loadprofiledata(this.userid);
    // });
    // this.storage.get('email').then((value) => {
    //          this.email = value;
    //          this.loadprofiledata(this.email);
    // });

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

    this.status = [
        {
          options: [
            { text: 'Single', value: 'single' },
            { text: 'In a Relationship', value: 'relationship' },
            { text: 'Married', value: 'married' },
            { text: 'Divorced', value: 'divorced' }
          ]
        }
    ];


    this.height = [
    {
      name: 'ft',
      options: [
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: '7', value: '7' }
      ]
    },{
      name: 'in',
      options: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: '7', value: '7' },
        { text: '8', value: '8' },
        { text: '9', value: '9' },
        { text: '10', value: '10' },
        { text: '11', value: '11' }
      ]
    }
  ];

  }
  
  ionViewDidLoad() {
  	      this.loadprofiledata();      
              }
 loadprofiledata()
 {
                this.loadingPopup.present();
                console.log("emailid - "+this.email);
                this.email = 'divyanshu.chat@yahoo.com';
                var link = 'http://ayo-app.herokuapp.com/api/users/retrieve';
                let headers = new Headers({ 'Content-Type': 'application/json' });
                var data_string = JSON.stringify({email:this.email});
                var options = new RequestOptions({headers: headers});
                this.http.post(link, data_string, options)
                  .map(res => res.json())
                    .subscribe((data) => {
                      //console.log('!@!@!@!@', data);
                      this.setUserDataFields(data);
                      this.loadingPopup.dismiss();


                    }, (err) => { 
                      console.log(err); 
                    });
 }

  setUserDataFields(data) {
    this.profiledata = data.data;
    this.usergender = this.profiledata.gender;
    this.display_name = this.profiledata.display_name;
    this.picture = this.profiledata.profile_picture;    
    this.userpreference = this.profiledata.preference;
    this.token = this.profiledata.token;
    this.userid = this.profiledata._id;
  }

  updateUserProfileData() {
    var data = {token: this.token, id: this.userid, display_name: this.display_name, hometown: this.hometown, dob: this.dob, gender: this.usergender, relationship_status: this.userstatus, preference: this.userpreference};
    var link = "http://ayo-app.herokuapp.com/api/users/profile";
    var headers = new Headers({headers: 'Content-Type: application/json'});
    var options = new RequestOptions({headers: headers});

    console.log(this.userid, this.token, data);
    this.http.put(link, data, options).map((res) => res.json()).subscribe((data)=> console.log(data), (err) => console.log(err))
  }

  logout()
  {
  	this.userData.logout();
  	this.appCtrl.getRootNav().push(LoginPage);
  	
  }

}
