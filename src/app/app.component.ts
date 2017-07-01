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

import { HomePage } from '../pages/home/home';

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
                           //this.rootPage =  Onboarding1Page;
                          this.rootPage = HomePage;
                        
                     } else {
                         //this.rootPage = LoginPage;
                         // this.rootPage = Onboarding1Page;
                            // this.rootPage = TabsPage;
                            this.rootPage = HomePage;
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
            apiKey: "AIzaSyB5X0_HQ0VZZPcSlYL64htDS4RdQosL8RE",
            authDomain: "ayo-uploads.firebaseapp.com",
            databaseURL: "https://ayo-uploads.firebaseio.com/",
            projectId: "ayo-uploads",
            storageBucket: "ayo-uploads.appspot.com",
            messagingSenderId: "312488155282"
          };

          //firebase has missing dependency for promise-polyfill, need to do npm install promise-polyfill --save-exact
          firebase.initializeApp({firebaseConfig});
          
        });
    })

     
  }
}
