import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  template: `
    <div class="h-screen flex items-center justify-center">

      <div class="m-auto prose lg:prose-xl">
        <div class="flex items-center justify-center space-x-2 animate-pulse">
          <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        </div>
      </div>

    </div>


  `,
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getToken();
  }


  getToken() {
    this.route.queryParams.subscribe((params) => {
      const code = params["code"];
      console.log(code);

      if (code) {
        this.authService.getAccessToken(code)
          .subscribe((res: any) => {
            console.log(res);

            if (res?.error === "bad_verification_code") {
              window.location.href = "https://github.com/login/oauth/authorize?client_id=2afa85f6b65eddb897b5&scope=user repo admin:org&state=123"
            }

            // TODO: Remove this code in future
            this.authService.setLs("accessToken", res.access_token);
            this.authService.setLs("scope", res.scope);
            this.authService.setLs("token_type", res.token_type);
            this.router.navigateByUrl("/admin")

            // this.authService.getUserDetails()
            //   ?.subscribe(
            //     (res: any) => {
            //       const username = res.login;

            //       if (username) {
            //         this.authService.checkUserExist({ email: username })
            //           .subscribe(
            //             (emailCheckRes: any) => {

            //               console.log(emailCheckRes);
            //               const { exist } = emailCheckRes;

            //               if (exist === false) {
            //                 this.authService.logout();
            //                 this.toastr.error("User Does Not Exist");
            //                 this.router.navigateByUrl("/");
            //                 return;
            //               }

            //               const { role } = emailCheckRes;
            //               this.authService.userDetails$.next(res);

            //               this.authService.setLs("accessToken", res.access_token);
            //               this.authService.setLs("scope", res.scope);
            //               this.authService.setLs("token_type", res.token_type);

            //               this.authService.setLs("username", username);
            //               this.authService.setLs("role", role)

            //               if (role === "admin") {
            //                 this.router.navigateByUrl("/admin")
            //               } else if (role === "user") {
            //                 this.router.navigateByUrl("/user")
            //               } else {
            //                 this.toastr.warning("Invalid Role");
            //                 this.router.navigateByUrl("/home")
            //               }

            //             }
            //           )
            //       }

            //     });


          }, (err: any) => {
            console.error(err);
          })
      }

    })
  }

}
