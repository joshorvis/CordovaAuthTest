# Cordova/Firebase Auth Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

It is currently using Cordova v7.0 per the suggestion here: https://stackoverflow.com/a/48160450 (but was originally tried with v8.0, no change)

cordova-universal-links-plugin has been modified to fix build error `Cannor read propery 'mainifest' of undefined` per this fix: https://github.com/nordnet/cordova-universal-links-plugin/commit/b2c5784764225319648e26aa5d3f42ede6d1b289#diff-d5955d9f4d88b42e5efd7a3385be79e9

## To set up:

- `/config.xml` 
  - Replace `abc123.app.goo.gl` with your Firebase Bynamic Links (FDL) domain.
  - Replace `my-app.firebaseapp.com` with your Firebase Auth Domain  

- `/environments/environment.ts` and `/environments/environment.prod.ts`
  - Replace `YOUR-INFO-HERE` with the specifics from your Firebase account setup 

## Steps Taken:

- `cordova create`
- `ng new`
- Follow instructions at [OAuth Sign-in for Cordova](https://firebase.google.com/docs/auth/web/cordova) (last cordova plugin not installed as it is iOS-specific)
- Fix cordova-universal-links-plugin build error (see above)
