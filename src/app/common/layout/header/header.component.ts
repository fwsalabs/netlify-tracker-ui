import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  loginForm!: FormGroup;
  userDetails: any;

  constructor(
    private authService: AuthService,
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.buildForm();
    this.commonService.userDetails
      .subscribe(
        (res: any) => {
          this.userDetails = res;
        })
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }

  buildForm() {
    return this.formBuilder.group({
      email: new FormControl(null, Validators.required)
    })
  }
}
