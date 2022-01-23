import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import * as SecureLS from 'secure-ls';
import { AuthService } from '../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private secureLs: SecureLS;

  userDetails: any;

  userName!: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private toastr: ToastrService,
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
        this.userName = res.login;

        if (this.userName) {

          this.authService.checkUserExist({ email: this.userName })
            .subscribe(
              (emailCheckRes: any) => {

                console.log(emailCheckRes);
                if (emailCheckRes.exist === false) {
                  this.authService.logout();
                  this.toastr.error("User Does Not Exist");
                  this.router.navigateByUrl("/");
                  return;
                }

                this.authService.userDetails$.next(res);
                this.setLs("username", this.userName);
                this.setLs("role", emailCheckRes.role)
                this.router.navigateByUrl("/sites");

              }
            )
        }
      })
    }

  }

}
