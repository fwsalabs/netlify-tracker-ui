import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  template: '',
})
export class AuthComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private authService: AuthService,
    private router: Router
  ) {
    this.getToken()
  }

  ngOnInit(): void { }


  getToken() {
    this.route.queryParams.subscribe((params) => {
      const code = params["code"];
      console.log(code);

      if (code) {
        this.authService.getAccessToken(code)
          .subscribe((res: any) => {
            console.log(res);

            this.commonService.setLs("accessToken", res.access_token);
            this.commonService.setLs("scope", res.scope);
            this.commonService.setLs("token_type", res.token_type);

            this.commonService.getUserDetails();
            this.router.navigateByUrl("/sites");
          })
      }

    })
  }

}
