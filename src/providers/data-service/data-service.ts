import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataServiceProvider {
	public firebaseDB: any;
	public firebasePhotos: any;

  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');

    this.firebaseDB = firebase.database().ref('/');
    this.firebasePhotos = firebase.storage().ref('/photos');
  }

  uploadToFirebase(image, /*type,*/ fileName) {
    //var fileName = 'sample-' + new Date().getTime() + '.jpg';
    var fileRef = this.firebasePhotos;
    return new Promise((resolve, reject) => {

      /*if(type == this.globals.CAMERA_UPLOAD_TYPE_PROFILE){
        fileName = this.globals.currentUser.uid + '.jpg';
      }*/
      fileRef = fileRef.child(/*type+*/'profile/'+fileName);

      var uploadTask = fileRef.put(image);

      uploadTask.on('state_changed', (snapshot) => {
        console.log('snapshot progess ' + snapshot);
      }, (error) => {
        reject(error);
      }, () => {
        // completion...
        resolve(uploadTask.snapshot);
      });
    });
  }
}
