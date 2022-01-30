import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _userDetails = new BehaviorSubject(undefined);
  userDetails = this._userDetails.asObservable();

  constructor(
    private http: HttpClient
  ) {
    this.getUserDetails()
      .subscribe(
        (res: any) => {
          this._userDetails.next(res);
        })
  }

  getUserDetails() {
    return this.http.get("https://api.github.com/users/suryaumapathy2812");
  }


}