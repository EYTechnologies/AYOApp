import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { UserdataProvider } from '../providers/userdata/userdata';

import { Onboarding1Page } from "../pages/onboarding1/onboarding1";
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { TutorialPage } from '../pages/tutorial/tutorial';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, public userData: UserdataProvider, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
    
    this.storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        console.log("has seen tutorial - "+hasSeenTutorial);
         if (hasSeenTutorial) {

           this.userData.hasLoggedIn().then((hasLoggedIn) => {
                console.log("has logged in - "+hasLoggedIn);
                     if (hasLoggedIn)
                     {
                         //this.rootPage = TabsPage;
                           this.rootPage =  Onboarding1Page;
                          // this.rootPage = HomePage;
                        
                     } else {
                         //this.rootPage = LoginPage;
                         this.rootPage = Onboarding1Page;
                            // this.rootPage = TabsPage;
                     }
              })
             
        } 
        else 
        {
          this.rootPage = TutorialPage;
        }

        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();

          //Initialize firebase with the credentials
          const firebaseConfig = {
            apiKey: "AIzaSyAGZksEhETlx1emtROSAWpkbJI9Cds3N-I",
            authDomain: "testapp-45fba.firebaseapp.com",
            databaseURL: "https://testapp-45fba.firebaseio.com",
            projectId: "testapp-45fba",
            storageBucket: "testapp-45fba.appspot.com",
            messagingSenderId: "29725571671"
          };

          //firebase has missing dependency for promise-polyfill, need to do npm install promise-polyfill --save-exact
          firebase.initializeApp({firebaseConfig});
        });
    })

     
  }
}
