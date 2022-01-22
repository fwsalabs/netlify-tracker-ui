import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private secureLs: SecureLS;
  
  private userDetails$ = new BehaviorSubject<any>(undefined);
  userDetails = this.userDetails$.asObservable();

  userName: String | undefined;

  constructor(
    private http: HttpClient
  ) {
    this.secureLs = new SecureLS({ encodingType: 'aes', encryptionSecret: 'hastaLaVistaBaby' });
    this.getUserDetails();
  }

  getLs(key: string) {
    return this.secureLs.get(key);
  }

  setLs(key: string, value: string) {
    this.secureLs.set(key, value);
  }

  getUserDetails() {

    if (this.userDetails$.value) {
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
        this.userDetails$.next(res);
        this.userName = res.login;
      })
    }

  }

}
