import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Onboarding4Page } from "../onboarding4/onboarding4";
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the Onboarding3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-onboarding3',
  templateUrl: 'onboarding3.html',
})
export class Onboarding3Page {
  picture: any;
  registerUser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionsheetCtrl: ActionSheetController, private Camera: Camera) {

      this.registerUser = this.navParams.get('data');
      console.log("Register data for picture - ");
      console.log(this.registerUser[0].profile_picture);
      this.picture = this.registerUser[0].profile_picture;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding3Page');
  }
  next()
  { 
    this.navCtrl.push(Onboarding4Page, {data: this.registerUser});

  }

  uploadimage(){
    let actionSheet = this.actionsheetCtrl.create({
            title: 'Upload Image',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Gallery',
                    role: 'destructive',
                    icon: 'images',
                    handler: () => {
                        let options = {
                            destinationType : this.Camera.DestinationType.FILE_URI,
                            quality: 40,
                            allowEdit : true,
                            targetWidth: 300,
                            targetHeight: 300,
                            sourceType : this.Camera.PictureSourceType.PHOTOLIBRARY
                        };

                        this.Camera.getPicture(options).then(
                            (imageData) => {
                                // imageData is either a base64 encoded string or a file URI
                                // If it's base64:
                                let base64Image = 'data:image/png;base64,' + imageData;
                                //this.uploadimage(imageData);

                                this.uploadImageToAws(imageData);
                                // console.log(imageData);
                            },
                            (err) => {
                                // Handle error
                            }
                        );
                        //this.cameraupload();
                        //console.log('Image uploaded from gallery');
                    }
                },
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: () => {
                        let options = {                            
                            destinationType : this.Camera.DestinationType.FILE_URI,
                            allowEdit : true,
                            quality: 40,
                            targetWidth: 300,
                            targetHeight: 300,
                            sourceType : this.Camera.PictureSourceType.CAMERA
                        };

                        this.Camera.getPicture(options).then(
                            (imageData) => {
                                // imageData is either a base64 encoded string or a file URI
                                // If it's base64:
                                let base64Image = 'data:image/png;base64,' + imageData;
                                //this.uploadimage(imageData);

                                this.uploadImageToAws(imageData);
                                console.log("Image From Camera");
                            },

                            (err) => {
                                // Handle error
                            }
                        );
                        // console.log('Image clicked');
                    }
                },

                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: 'close' ,
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        actionSheet.present();
        console.log('Clicked to update picture');
  }

uploadImageToAws(imagedata)
{
  
}
}
