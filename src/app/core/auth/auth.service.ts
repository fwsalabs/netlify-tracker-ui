import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as SecureLS from 'secure-ls';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private secureLs: SecureLS;
  userDetails$: BehaviorSubject<any>;
  private db_url = environment.db_api_url;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.secureLs = new SecureLS({ encodingType: 'aes', encryptionSecret: 'hastaLaVistaBaby' });
    this.userDetails$ = new BehaviorSubject(undefined)
  }

  getLs(key: string) {
    return this.secureLs.get(key);
  }

  setLs(key: string, value: string) {
    this.secureLs.set(key, value);
  }

  getAccessToken(code: String) {
    const url = `https://auth-netlify-tracker.herokuapp.com/api/v1/auth/login/oauth2/code/github?code=${code}`
    return this.http.get(url);
  }


  get isAuthenticated() {
    let isAuthenticated: boolean = false;
    const token = this.getLs('accessToken');
    if (token && token !== null) { isAuthenticated = true };
    return isAuthenticated;
  }

  get loggedInUser() {
    return this.getLs("username");
  }

  private get role() {
    return this.getLs("role");
  }


  get isAdmin() {
    let isAdmin: boolean = false;
    const role = this.role;
    if (role === "admin") {
      isAdmin = true;
    }
    return isAdmin;
  }


  get isUser() {
    let isUser: boolean = false;
    const role = this.role;
    if (role === "user") {
      isUser = true;
    }
    return isUser;
  }

  logout() {
    localStorage.clear();
    this.userDetails$.next(undefined);
    this.router.navigateByUrl('/home');
  }


  getUserDetails(accessToken: string) {
    if (this.userDetails$.value) {
      return;
    }
    // const accessToken = this.getLs("accessToken");
    const url = "https://api.github.com/user";
    return this.http.get(url, {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    });
  }


  checkUserExist({ email }: { email: string }) {
    return this.http.get(this.db_url + "users/check/" + email);
  }



}
