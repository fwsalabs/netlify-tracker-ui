import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  userDetails: any;

  constructor(
    private authService: AuthService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.userDetails.subscribe(res => {
      this.userDetails = res;
    })
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }

}
