import { Injectable, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IonicAuth } from '@ionic-enterprise/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { nativeAuthOptions, webAuthOptions } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {
  private authenticationChange: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private tokenData: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public authenticationChange$: Observable<boolean>;
  public tokenData$: Observable<any>;

  constructor(platform: Platform, private ngZone: NgZone) {
    super(platform.is('hybrid') ? nativeAuthOptions : webAuthOptions);
    this.authenticationChange$ = this.authenticationChange.asObservable();
    this.tokenData$ = this.tokenData.asObservable();
    this.isAuthenticated().then(this.onAuthChange.bind(this));
  }

  public async onLoginSuccess(): Promise<void> {
    this.onAuthChange(true);
  }

  public async onLogout(): Promise<void> {
    this.onAuthChange(false);
  }

  private async onAuthChange(isAuthenticated: boolean): Promise<void> {
    this.ngZone.run(async () => {
      this.authenticationChange.next(isAuthenticated);
      if (isAuthenticated) {
        const token = await this.getIdToken();
        this.tokenData.next(token);
      } else {
        this.tokenData.next(undefined);
      }
    });
  }
}
