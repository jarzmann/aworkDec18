import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { GoogleAuthProvider, User, AuthCredential, UserCredential } from '@firebase/auth-types';


import { UserModel } from '../models/user.model';
import { AlertService } from './alert.service';

@Injectable()
export class UserService {

  constructor(
    private alertService: AlertService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }


  saveUserInfo(user: User) {
    const userProfileDocument: AngularFirestoreDocument<UserModel> = this.firestore.doc(
      `userProfile/${user.uid}`
    );

    return userProfileDocument.set({
      id: user.uid,
      email: user.email,
    });

  }


  public updateUserInfo(uid: string, displayName: string, bio: string): Promise<string> {
    return firebase.database().ref().child('users/' + uid).update({
      displayName: displayName,
      bio: bio
    });
  }

  public keepInTouch(email: string) {
    this.alertService.showToaster('Your email is saved');
    return firebase.database().ref().child('touch/').push({
      email: email
    });
  }

  public contactFormSend(
    company: string,
    firstname: string,
    lastname: string,
    address: string,
    city: string,
    postal: string,
    message: string
  ) {
    this.alertService.showToaster('This contact form is saved');
    return firebase.database().ref().child('contactform/').push({
      company: company,
      firstname: firstname,
      lastname: lastname,
      address: address,
      city: city,
      postal: postal,
      message: message
    });
  }

  public getUserProfileInformation(): void {
    const user = this.afAuth.auth.currentUser;
    let name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
    }
  }

  public verificationUserEmail(): Promise<void> {
    return this.afAuth.auth.currentUser.sendEmailVerification().then(() => {
      // Email sent.
    }, (error) => {
      // An error happened.
    });
  }

  public sendUserPasswordResetEmail(): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(this.afAuth.auth.currentUser.email).then(() => {
      // Email sent.
    }, (error) => {
      // An error happened.
    });
  }

}
