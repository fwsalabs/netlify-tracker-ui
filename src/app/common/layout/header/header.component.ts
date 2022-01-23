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


  submitLoginForm() {
    const { value, invalid } = this.loginForm;

    if (invalid) {
      this.toastr.error("Invalid Form Input");
    }

    this.authService.checkUserExist(value)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.exist === false) {
            this.toastr.error("User Does Not Exist");
            return;
          }

          // this.authService.loginWithUsername = res.username;

          this.commonService.setLs("LoginWithUsername", res.username);

          console.log(" loginWithUsername => " + this.commonService.getLs("LoginWithUsername"));
          window.location.href = "https://github.com/login/oauth/authorize?client_id=28d31585afbdbae08125&scope=user repo admin:org&state=123&login=" + res.username;
        })
  }

}
