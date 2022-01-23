import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as SecureLS from 'secure-ls';
import { AuthService } from '../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private secureLs: SecureLS;

  userDetails: any;

  userName: string | undefined;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) {
    this.secureLs = new SecureLS({ encodingType: 'aes', encryptionSecret: 'hastaLaVistaBaby' });

    this.userDetails = this.authService.userDetails$.asObservable();

    this.getUserDetails();
  }

  getLs(key: string) {
    return this.secureLs.get(key);
  }

  setLs(key: string, value: string) {
    this.secureLs.set(key, value);
  }

  getUserDetails() {

    if (this.authService.userDetails$.value) {
      return;
    }
    const accessToken = this.getLs("accessToken");
    if (accessToken) {
      const url = "https://api.github.com/user";
      this.http.get(url, {
        headers: {
          "Authorization": "Bearer " + accessToken
        }
      }).subscribe((res: any) => {
        this.authService.userDetails$.next(res);
        this.userName = res.login;

        console.log(this.authService.loginWithUsername);
        console.log(this.userName);

        // if (this.userName) {
        //   this.setLs("username", this.userName);
        // }

        if (this.userName && this.userName === this.authService.loginWithUsername) {
          this.setLs("username", this.userName);
          this.router.navigateByUrl("/sites");
        }

        if (this.userName && this.userName !== this.authService.loginWithUsername) {
          this.authService.logout();
        }
      })
    }

  }

}
