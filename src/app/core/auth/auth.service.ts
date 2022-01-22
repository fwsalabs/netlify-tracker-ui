import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private db_url = environment.db_api_url

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

  checkUserExist({ email }: { email: string }) {
    return this.http.get(this.db_url + "users/check/" + email);
  }


}
