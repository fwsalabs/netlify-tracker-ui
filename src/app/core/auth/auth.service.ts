import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private router: Router
  ) { }

  getAccessToken(code: String) {
    const url = `https://auth-netlify-tracker.herokuapp.com/api/v1/auth/login/oauth2/code/github?code=${code}`
    return this.http.get(url);
  }

  get isAuthenticated() {
    let isAuthenticated: boolean = false;
    const token = this.commonService.getLs('accessToken');
    if (token && token !== null) { isAuthenticated = true };
    return isAuthenticated;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/sites');
  }


}
