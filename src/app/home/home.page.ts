import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authenticationChange$: Observable<boolean>;
  tokenData$: Observable<any>;

  constructor(private auth: AuthenticationService) {
    this.authenticationChange$ = auth.authenticationChange$;
    this.tokenData$ = auth.tokenData$;
  }

  async loginClicked() {
    try {
      await this.auth.login();
    } catch (err) {
      console.log('Error logging in:', err);
    }
  }

  async logoutClicked() {
    await this.auth.logout();
  }

  async refreshClicked() {
    await this.auth.refreshSession();
  }
}
