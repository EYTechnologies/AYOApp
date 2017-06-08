import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MultiPickerModule } from "ion-multi-picker";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Onboarding1Page } from '../pages/onboarding1/onboarding1';
import { Onboarding2Page } from '../pages/onboarding2/onboarding2';
import { Onboarding3Page } from '../pages/onboarding3/onboarding3';
import { Onboarding4Page } from '../pages/onboarding4/onboarding4';
import { ChatPage } from '../pages/chat/chat';
import { BrowsePage } from '../pages/browse/browse';
import { MatchesPage } from '../pages/matches/matches';
import { ProfilePage } from '../pages/profile/profile';
import { TutorialPage } from '../pages/tutorial/tutorial';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Facebook } from '@ionic-native/facebook';
import { IonicStorageModule } from '@ionic/storage';
import { UserdataProvider } from '../providers/userdata/userdata';

import { HttpModule } from '@angular/http';


import { Geolocation } from '@ionic-native/geolocation';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'cf5c2c8c'
  },
  'auth': {
    'facebook': {
      'scope': ['public_profile', 'email']
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    Onboarding1Page,
    Onboarding2Page,
    Onboarding3Page,
    Onboarding4Page,
    ChatPage,
    BrowsePage,
    MatchesPage,
    ProfilePage,
    TutorialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    MultiPickerModule,
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,    
    Onboarding1Page,
    Onboarding2Page,
    Onboarding3Page,
    Onboarding4Page,
    ChatPage,
    BrowsePage,
    MatchesPage,
    ProfilePage,
    TutorialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Storage,
    HTTP,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserdataProvider,
    Geolocation

  ]
})
export class AppModule {}
