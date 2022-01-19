import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  getAccessToken(code: String) {
    const url = `https://auth-netlify-tracker.herokuapp.com/api/v1/auth/login/oauth2/code/github?code=${code}`
    return this.http.get(url);
  }

  isAuthenticated() {
    let isAuthenticated: boolean = false;
    if (this.commonService.getLs('accessToken') !== null) { isAuthenticated = true };
    return isAuthenticated;
  }

  logout() {
    localStorage.clear();
  }
}
