# Example Auth Connect Angular/Capacitor Application
This app using Angular/Capacitor to demonstrate simple login/logout functionality using Auth Connect.
Its purpose is to provide a quick way to try out different identity provider configurations.

### Developer setup
1.  Since this uses an enterprise plugin, you'll need to copy over your `.npmrc` file from an application that already uses your product key.
2.  After that file is included you should be able to successfully run:
    ```bash
    npm install
    ```
3.  If necessary, add the needed native platforms ([docs](https://ionicframework.com/docs/cli/commands/capacitor-add)).
4.  Follow the installation step for adding `$AUTH_URL_SCHEME` to the platform configurations ([docs](https://ionic.io/docs/auth-connect/install#installation)).
5.  Read through the comments in `src/environments/environment.ts` for the two IonicAuthOptions objects (web/native).
    Provide all the `'FILL_IN'` with their appropriate values configured within the idP.
6.  After configuration, you can run the following command and try out the login/logout functionality:
    ```bash
    // on the web
    ionic serve

    // on ios device
    ionic cap run ios

    // on android device
    ionic cap run android
    ```