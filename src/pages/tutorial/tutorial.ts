import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { UserdataProvider } from '../../providers/userdata/userdata';

/**
 * Generated class for the TutorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  showSkip = true;
  logged_in_user: any;

  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams, public userData: UserdataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  startApp() {

    if(this.userData.HAS_LOGGED_IN == 'true') {
        this.navCtrl.push(TabsPage).then(() => {
        this.storage.set('hasSeenTutorial', 'true');
      })
    } else 
    this.navCtrl.push(LoginPage);
    
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
  }

  ionViewDidLeave() {
  }

}
