import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

declare const universalLinks;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Firebase Test';
  eventData: any = {msg: 'not loaded'};

  constructor() {

  }

  ngOnInit() {
    if (window['cordova']) {
      this.eventData.msg = 'cordova is here';
    }
    if (window['universalLinks']) {
      this.eventData.univLinks = true;
    }
    if (typeof window['cordova'] !== 'undefined') {
      document.addEventListener('deviceready', () => {
        this.onDeviceReady();
      });
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log('user', user);
        this.eventData.user = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        };
      } else {
        this.eventData.user = 'logged out';
      }
    });

    firebase.auth().getRedirectResult().then((result) => {
      if (result) {
        console.log('redir result', result);
        this.eventData.redirResult = result;
      } else {
        console.log('no redir result');
      }
    }).catch((error) => {
      console.log('redir error', error);
      this.eventData.redirError = error;
    });
  }

  onDeviceReady() {
    console.log('device is ready');
    this.eventData.msg = 'device is ready';

    universalLinks.subscribe(null,  (eventData) => this.eventData.linkData = eventData);
  }

  loginWithGoogle() {
    this.eventData.signinStarted = true;
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider).then((data) => {
      console.log('auth stage 1', data);
      return firebase.auth().getRedirectResult();
    }).then((result) => {
      console.log('auth result', result);
      this.eventData.result = result;
    }).catch((error) => {
      console.log('auth error', error);
      this.eventData.error = error;
    });
  }

  logout() {
    firebase.auth().signOut();
  }
}
