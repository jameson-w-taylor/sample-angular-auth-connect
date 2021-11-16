// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IonicAuthOptions } from '@ionic-enterprise/auth';

export const nativeAuthOptions: IonicAuthOptions = {
  // Try findind a provider config that works ("general" is deprecated but might work)
  authConfig: 'FILL_IN',
  platform: 'capacitor',
  // Required from idP
  clientID: 'FILL_IN',
  // Required from idP
  discoveryUrl: 'FILL_IN',
  // Configured AUTH_URL_SCHEME redirect within idP (used in android/ios project configurations for deeplinking)
  // For this app, should route to "AUTH_URL_SCHEME/home"
  // Docs: https://ionic.io/docs/auth-connect/install#installation
  redirectUri: 'FILL_IN',
  scope: 'openid offline_access email picture profile',
  // Configured AUTH_URL_SCHEME redirect within idP (used in android/ios project configurations for deeplinking)
  // For this app, should route to "AUTH_URL_SCHEME/home"
  logoutUrl: 'FILL_IN',
  implicitLogin: 'POPUP',
  webAuthFlow: 'PKCE',
  iosWebView: 'private'
};

export const webAuthOptions: IonicAuthOptions = {
  // Try findind a provider config that works ("general" is deprecated but might work)
  authConfig: 'FILL_IN',
  platform: 'web',
  // Required from idP
  clientID: 'FILL_IN',
  // Required from idP
  discoveryUrl: 'FILL_IN',
  // Configured redirect within idP (different from native, should redirect to localhost for development)
  // For this app, should route to "home" at whatever port your local development server is running on (ex: "http://localhost:8100/home")
  redirectUri: 'FILL_IN',
  scope: 'openid offline_access email picture profile',
  // Configured redirect within idP (different from native, should redirect to localhost for development)
  // For this app, should route to "home" at whatever port your local development server is running on (ex: "http://localhost:8100/home")
  logoutUrl: 'FILL_IN',
  implicitLogin: 'POPUP',
  webAuthFlow: 'PKCE'
};

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
